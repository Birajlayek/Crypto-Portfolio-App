import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import './HistoricalData.css';

const HistoricalData = ({ tokens }) => {
  const [selectedToken, setSelectedToken] = useState(tokens[0]?.name || '');
  const [dateRange, setDateRange] = useState([new Date().toISOString().split('T')[0], new Date().toISOString().split('T')[0]]);

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setDateRange((prevRange) => {
      const newRange = [...prevRange];
      newRange[name === 'start' ? 0 : 1] = value;
      return newRange;
    });
  };

  const chartData = {
    labels: ['2024-01-01', '2024-02-01', '2024-03-01'], // Placeholder dates
    datasets: [
      {
        label: `${selectedToken} Historical Balance`,
        data: [1.0, 1.2, 1.1], // Placeholder data
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  return (
    <div className="historical-data">
      <h2>Historical Data</h2>
      <label>
        Token:
        <select onChange={(e) => setSelectedToken(e.target.value)} value={selectedToken}>
          {tokens.map((token, index) => (
            <option key={index} value={token.name}>
              {token.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Start Date:
        <input type="date" name="start" value={dateRange[0]} onChange={handleDateChange} />
      </label>
      <label>
        End Date:
        <input type="date" name="end" value={dateRange[1]} onChange={handleDateChange} />
      </label>
      <Line data={chartData} />
    </div>
  );
};

export default HistoricalData;
