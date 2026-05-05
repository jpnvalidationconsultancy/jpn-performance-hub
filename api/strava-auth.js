export default async function handler(req, res) {
  try {
    const access_token = process.env.STRAVA_ACCESS_TOKEN;

    if (!access_token) {
      return res.status(400).json({ error: "No access token set" });
    }

    const response = await fetch(
      "https://www.strava.com/api/v3/athlete/activities?per_page=20",
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    const data = await response.json();

    return res.status(200).json({
      status: "Activities loaded",
      count: data.length,
      activities: data,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Failed to load activities",
      details: error.message,
    });
  }
}
