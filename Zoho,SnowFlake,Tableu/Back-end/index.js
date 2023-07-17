// server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors()); 

app.post('/zoho', async (req, res) => {
  const { grant_type, client_id, client_secret, code } = req.body;
  const apiUrl = `https://accounts.zoho.com/oauth/v2/token?grant_type=${grant_type}&client_id=${client_id}&client_secret=${client_secret}&code=${code}`;

  try {
    const response = await axios.post(apiUrl);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error.message);
    res.status(500).json({ error: 'Error fetching data' });
  }
});


// Routes
app.post('/oauth2/callback', async (req, res) => {
  const { code } = req.body;

  if (!code) {
    return res.status(400).json({ error: 'Authorization code not provided.' });
  }

  try {
    const token = await getAccessToken(code);
    return res.json(token);
  } catch (error) {
    console.error('Error fetching access token:', error.message);
    return res.status(500).json({ error: 'Error fetching access token.' });
  }
});


// Function to get the access token
async function getAccessToken(authorizationCode) {
  const authUrl = 'https://gh72679.europe-west4.gcp.snowflakecomputing.com/oauth/authorize';
  const tokenUrl = 'https://gh72679.europe-west4.gcp.snowflakecomputing.com/oauth/token-request';
  const clientId = 'Uh1XP0xew0gxcirSgMwV11dtilw=';
  const clientSecret = '9PvfETQpbLQtRGKRnSBoTT8VNLHd8SAiCXmKaTyvPRs=';
  const redirectUri = 'https://oauth.pstmn.io/v1/browser-callback';

  try {
    // Step 1: Get the authorization code
    // The code should be obtained from the callback URL query parameters, but you can also pass it as a parameter.
    const code = authorizationCode;

    // Step 2: Exchange the authorization code for an access token
    const tokenResponse = await axios.post(tokenUrl, querystring.stringify({
      grant_type: 'authorization_code',
      client_id: clientId,
      client_secret: clientSecret,
      code,
      redirect_uri: redirectUri,
    }), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    return tokenResponse.data;
  } catch (error) {
    throw new Error('Error fetching access token: ' + error.message);
  }
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
