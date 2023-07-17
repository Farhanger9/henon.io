import React, { useState } from 'react';
import './App.css'

const App = () => {
  const [trialBalance, setTrialBalance] = useState(null);
  const [data2, setData2] = useState(null);
  const [data3, setData3] = useState(null);
  const [data4, setData4] = useState(null);

  const handleTrialBalance = async () => {
    try {
      const url = `http://localhost:8000/api/gettb`;
      // Set up headers
      const headers = {
        'Accept': 'application/json',
      };

      const response = await fetch(url, {
        method: 'GET',
        headers: headers
      });

      const jsonData = await response.json();
      setTrialBalance(jsonData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAPICall2 = async () => {
    try {
      // Make API call for data 2
      const response = await fetch('<API_URL_2>');
      const jsonData = await response.json();
      setData2(jsonData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAPICall3 = async () => {
    try {
      // Make API call for data 3
      const response = await fetch('<API_URL_3>');
      const jsonData = await response.json();
      setData3(jsonData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAPICall4 = async () => {
    try {
      // Make API call for data 4
      const response = await fetch('<API_URL_4>');
      const jsonData = await response.json();
      setData4(jsonData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>API Calls</h1>
      <h1>API Calls</h1>
      <div className="button-container">
        <button className="blue-button" onClick={handleTrialBalance}>
          Trial Balance
        </button>
        <button className="blue-button" onClick={handleAPICall2}>
          API 2
        </button>
        <button className="blue-button" onClick={handleAPICall3}>
          API 3
        </button>
        <button className="blue-button" onClick={handleAPICall4}>
          API 4
        </button>
      </div>
      <div className="data-container">
        <h2>Trial Balance</h2>
        {trialBalance && <pre>{JSON.stringify(trialBalance, null, 2)}</pre>}
        <h2>Data 2</h2>
        {data2 && <pre>{JSON.stringify(data2, null, 2)}</pre>}
        <h2>Data 3</h2>
        {data3 && <pre>{JSON.stringify(data3, null, 2)}</pre>}
        <h2>Data 4</h2>
        {data4 && <pre>{JSON.stringify(data4, null, 2)}</pre>}
      </div>
    </div>
  );
};

export default App;
