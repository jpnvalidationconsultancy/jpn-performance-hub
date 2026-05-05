export default async function handler(req, res) {
  const { code, error } = req.query;

  if (error) {
    return res.status(400).json({ status: "Strava returned an error", error });
  }

  if (!code) {
    return res.status(200).json({
      status: "API route is working",
      expectedCallback: process.env.STRAVA_REDIRECT_URI
    });
  }

  const response = await fetch("https://www.strava.com/oauth/token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      client_id: process.env.STRAVA_CLIENT_ID,
      client_secret: process.env.STRAVA_CLIENT_SECRET,
      code,
      grant_type: "authorization_code"
    })
  });

  const data = await response.json();

  if (!response.ok) {
    return res.status(400).json({
      status: "Token exchange failed",
      data
    });
  }

  return res.status(200).json({
    status: "Token exchange successful",
    athlete: data.athlete,
    access_token: data.access_token,
    refresh_token: data.refresh_token,
    expires_at: data.expires_at
  });
}
