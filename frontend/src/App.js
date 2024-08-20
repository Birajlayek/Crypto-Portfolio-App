import React, { useState, useEffect } from 'react';
import { WalletConnection } from './components/WalletConnection';
import { TokenWatchList } from './components/TokenWatchList';
import { HistoricalData } from './components/HistoricalData';
import { AllowanceCheck } from './components/AllowanceCheck';
import { TokenTransfer } from './components/TokenTransfer';
import { fetchTokens } from './api/tokenApi';
import './styles/App.css';

const App = () => {
  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    const getTokens = async () => {
      const tokenData = await fetchTokens();
      setTokens(tokenData);
    };
    getTokens();
  }, []);

  return (
    <div className="app-container">
      <h1>Crypto Portfolio App</h1>
      <WalletConnection />
      <TokenWatchList tokens={tokens} />
      <HistoricalData tokens={tokens} />
      <AllowanceCheck />
      <TokenTransfer />
    </div>
  );
};

export default App;
