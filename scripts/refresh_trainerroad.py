#!/usr/bin/env python3
import os, json, re, urllib.request
from datetime import datetime

URL = os.environ.get("TRAINERROAD_ICS_URL")
if not URL:
    raise SystemExit("TRAINERROAD_ICS_URL secret is not set")

def unfold_ics(text: str) -> str:
    return text.replace("\r\n", "\n").replace("\r", "\n").replace("\n ", "").replace("\n\t", "")

def get_field(block: str, field: str) -> str:
    for line in block.split("\n"):
        if line.startswith(field + ":") or line.startswith(field + ";"):
            if ":" in line:
                value = line.split(":", 1)[1]
                return value.replace("\\n", " ").replace("\\,", ",").replace("\\;", ";").strip()
    return ""

def parse_ics(text: str):
    text = unfold_ics(text)
    sessions = []
    for block in text.split("BEGIN:VEVENT")[1:]:
        block = block.split("END:VEVENT")[0]
        summary = get_field(block, "SUMMARY") or "Workout"
        description = get_field(block, "DESCRIPTION")
        location = get_field(block, "LOCATION")
        dtstart = get_field(block, "DTSTART")
        date = ""
        m = re.search(r"(\d{8})", dtstart)
        if m:
            d = m.group(1)
            date = f"{d[0:4]}-{d[4:6]}-{d[6:8]}"
            day = datetime.strptime(date, "%Y-%m-%d").strftime("%A")
        else:
            day = ""
        sessions.append({"summary": summary, "date": date, "day": day, "description": description, "location": location})
    return sessions

with urllib.request.urlopen(URL, timeout=30) as response:
    ics_text = response.read().decode("utf-8", errors="replace")

sessions = parse_ics(ics_text)
payload = {"updated_at": datetime.utcnow().isoformat() + "Z", "sessions": sessions}

os.makedirs("data", exist_ok=True)
with open("data/trainerroad-plan.json", "w", encoding="utf-8") as f:
    json.dump(payload, f, indent=2)

print(f"Wrote {len(sessions)} sessions to data/trainerroad-plan.json")
