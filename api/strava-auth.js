export default async function handler(req, res) {
  const { code, error } = req.query;

  if (error) {
    return res.status(400).json({
      status: "Strava returned an error",
      error
    });
  }

  if (!code) {
    return res.status(200).json({
      status: "API route is working",
      message: "No Strava code received yet. Use the Strava authorize link to generate a code.",
      expectedCallback: process.env.STRAVA_REDIRECT_URI || "STRAVA_REDIRECT_URI not set"
    });
  }

  return res.status(200).json({
    status: "Strava code received",
    code
  });
}
