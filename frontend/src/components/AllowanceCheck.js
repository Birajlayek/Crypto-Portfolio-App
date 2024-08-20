import React, { useState } from 'react';
import './AllowanceCheck.css';

const AllowanceCheck = () => {
  const [contractAddress, setContractAddress] = useState('');
  const [allowance, setAllowance] = useState(null);

  const checkAllowance = async () => {
    // Mock API call for allowance check
    setAllowance('100'); // Placeholder value
  };

  return (
    <div className="allowance-check">
      <h2>Check Token Allowance</h2>
      <input
        type="text"
        placeholder="Enter contract address"
        value={contractAddress}
        onChange={(e) => setContractAddress(e.target.value)}
      />
      <button onClick={checkAllowance}>Check Allowance</button>
      {allowance !== null && <p>Allowance: {allowance}</p>}
    </div>
  );
};

export default AllowanceCheck;
