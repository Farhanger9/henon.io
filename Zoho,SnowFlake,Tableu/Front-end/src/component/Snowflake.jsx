import React, { useState } from 'react';
import axios from 'axios';

const AccessTokenTable = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [error, setError] = useState(null);

  const makeAccessTokenRequest = async () => {
    const authUrl = 'https://gh72679.europe-west4.gcp.snowflakecomputing.com/oauth/authorize';
    const tokenUrl = 'https://gh72679.europe-west4.gcp.snowflakecomputing.com/oauth/token-request';
    const clientId = 'Uh1XP0xew0gxcirSgMwV11dtilw=';
    const clientSecret = '9PvfETQpbLQtRGKRnSBoTT8VNLHd8SAiCXmKaTyvPRs=';
    const redirectUri = 'https://oauth.pstmn.io/v1/browser-callback';

    try {
      // Assume you have the authorization code
      const authorizationCode = 'YOUR_AUTHORIZATION_CODE_HERE'; // Replace with the actual authorization code

      const response = await axios.post(tokenUrl, {
        grant_type: 'authorization_code',
        client_id: clientId,
        client_secret: clientSecret,
        ayth_url: authUrl,
        redirect_uri: redirectUri,
      });

      const accessToken = response.data.access_token;
      setAccessToken(accessToken);
      setError(null);
    } catch (error) {
      console.error('Error fetching access token:', error);
      setError('Error fetching access token');
    }
  };

  return (
    <div>
      <h2>Access Token Table</h2>
      <button onClick={makeAccessTokenRequest}>Get Access Token</button>
      {accessToken && (
        <div>
          <h3>Access Token</h3>
          <table>
            <thead>
              <tr>
                <th>Key</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(accessToken).map(([key, value]) => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default AccessTokenTable;
