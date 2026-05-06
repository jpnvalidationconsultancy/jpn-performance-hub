const TABLE = "performance_hub_state";
const ROW_ID = "jpn-performance-hub";

function send(res, status, payload) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,X-Hub-Sync-Key");
  res.end(JSON.stringify(payload));
}

export default async function handler(req, res) {
  if (req.method === "OPTIONS") return send(res, 200, { ok: true });
  const url = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const syncKey = process.env.HUB_SYNC_KEY;
  if (!url || !serviceKey || !syncKey) return send(res, 500, { error: "Cloud sync environment variables are not configured." });
  if (req.headers["x-hub-sync-key"] !== syncKey) return send(res, 401, { error: "Invalid sync key." });

  const endpoint = `${url.replace(/\/$/, "")}/rest/v1/${TABLE}`;
  const headers = { Authorization: `Bearer ${serviceKey}`, apikey: serviceKey, "Content-Type": "application/json" };

  try {
    if (req.method === "GET") {
      const r = await fetch(`${endpoint}?id=eq.${encodeURIComponent(ROW_ID)}&select=state,updated_at`, { headers });
      const rows = await r.json();
      if (!r.ok) return send(res, r.status, { error: rows?.message || "Supabase read failed." });
      return send(res, 200, { ok: true, state: rows?.[0]?.state || {}, updated_at: rows?.[0]?.updated_at || null });
    }
    if (req.method === "POST") {
      const body = req.body || {};
      const payload = { id: ROW_ID, state: body.state || {}, updated_at: new Date().toISOString() };
      const r = await fetch(endpoint, { method: "POST", headers: { ...headers, Prefer: "resolution=merge-duplicates,return=representation" }, body: JSON.stringify(payload) });
      const data = await r.json();
      if (!r.ok) return send(res, r.status, { error: data?.message || "Supabase write failed." });
      return send(res, 200, { ok: true, updated_at: data?.[0]?.updated_at || payload.updated_at });
    }
    return send(res, 405, { error: "Method not allowed." });
  } catch (e) {
    return send(res, 500, { error: e.message || "Cloud sync failed." });
  }
}
