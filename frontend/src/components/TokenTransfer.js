import React, { useState } from 'react';
import './TokenTransfer.css';

const TokenTransfer = () => {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');

  const handleTransfer = async () => {
    // Mock API call for token transfer
    console.log('Transferring tokens:', { recipient, amount });
  };

  return (
    <div className="token-transfer">
      <h2>Token Transfer</h2>
      <input
        type="text"
        placeholder="Recipient address"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleTransfer}>Transfer</button>
    </div>
  );
};

export default TokenTransfer;
