import React, { useState } from 'react';
import axios from 'axios';

const ZohoData = () => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.post('http://localhost:5000/zoho', {
        grant_type: 'authorization_code',
        client_id: '1000.JOL7Q1ENVXMWRPLFKVUO6F86IWQAEI',
        client_secret: '76641da2ba89deb8c4ddf48b5f82f57cc20da126b6',
        code: '1000.8e610537c8c1860bcb91e415992a6673.b643050a9f202805999387945fa146b5',
      });

      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>ZOHO Fetch Data</button>
      {data && (
        <table>
          <thead>
            <tr>
              <th>Key</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(data).map(([key, value]) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ZohoData;
