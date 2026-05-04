export default async function handler(req, res) {
  const clientId = process.env.STRAVA_CLIENT_ID;
  const redirectUri = process.env.STRAVA_REDIRECT_URI;

  const url = `https://www.strava.com/oauth/authorize
    ?client_id=${clientId}
    &response_type=code
    &redirect_uri=${redirectUri}
    &approval_prompt=auto
    &scope=activity:read_all`;

  res.writeHead(302, { Location: url.replace(/\s/g, "") });
  res.end();
}
