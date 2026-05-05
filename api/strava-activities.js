export default async function handler(req, res) {
  try {
    const refreshResponse = await fetch("https://www.strava.com/oauth/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        client_id: process.env.STRAVA_CLIENT_ID,
        client_secret: process.env.STRAVA_CLIENT_SECRET,
        refresh_token: process.env.STRAVA_REFRESH_TOKEN,
        grant_type: "refresh_token"
      })
    });

    const tokenData = await refreshResponse.json();

    if (!refreshResponse.ok) {
      return res.status(400).json({
        status: "Refresh token failed",
        tokenData
      });
    }

    const activitiesResponse = await fetch(
      "https://www.strava.com/api/v3/athlete/activities?per_page=20",
      {
        headers: {
          Authorization: `Bearer ${tokenData.access_token}`
        }
      }
    );

    const activities = await activitiesResponse.json();

    if (!activitiesResponse.ok) {
      return res.status(400).json({
        status: "Activities fetch failed",
        activities
      });
    }

    return res.status(200).json({
      status: "Activities loaded",
      count: activities.length,
      activities
    });
  } catch (error) {
    return res.status(500).json({
      status: "Server error",
      error: error.message
    });
  }
}
