# JPN Performance Hub V4

## What is new
- GitHub Actions infrastructure for automatic TrainerRoad calendar refresh.
- Converts TrainerRoad private iCal URL into `data/trainerroad-plan.json`.
- App reads `data/trainerroad-plan.json`.
- Food log with starter food database.
- Daily calorie and macro assessment.
- Lunch and full meal upload/manual entry.
- Hydration tracking and guidance.
- Garmin-style manual and CSV metric input.

## GitHub setup
1. Create a new GitHub repository.
2. Upload all files from this folder.
3. Go to Settings -> Secrets and variables -> Actions.
4. Create a repository secret:
   - Name: `TRAINERROAD_ICS_URL`
   - Value: your private TrainerRoad calendar URL from:
     https://www.trainerroad.com/profile/calendar-sync
5. Go to Actions.
6. Run `Refresh TrainerRoad Calendar` manually once.
7. Confirm `data/trainerroad-plan.json` updates.
8. Enable GitHub Pages:
   - Settings -> Pages
   - Source: Deploy from branch
   - Branch: main
   - Folder: root
9. Open the GitHub Pages URL on PC or iPhone.
10. In the app, go to TrainerRoad -> Load latest JSON feed.

## iPhone install
Open the GitHub Pages URL in Safari:
Share -> Add to Home Screen.

## Food log limitation
The app gives calorie and macro assessment from manual entries and a starter food database.
Brand-level and barcode-level accuracy requires a nutrition database API later.

## Garmin limitation
Automatic Garmin health sync requires approved Garmin API/backend access.
