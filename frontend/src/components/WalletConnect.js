import React, { useState } from 'react';
import './WalletConnection.css';

const WalletConnection = () => {
  const [address, setAddress] = useState('');
  const [connectedAddress, setConnectedAddress] = useState(null);

  const connectWallet = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/wallet/connect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ address }),
      });
      const result = await response.json();
      if (result.success) {
        setConnectedAddress(result.address);
      }
    } catch (error) {
      console.error('Error connecting wallet:', error);
    }
  };

  return (
    <div className="wallet-connection">
      <h2>Connect Wallet</h2>
      <input
        type="text"
        placeholder="Enter wallet address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button onClick={connectWallet}>Connect</button>
      {connectedAddress && <p>Connected Address: {connectedAddress}</p>}
    </div>
  );
};

export default WalletConnection;
