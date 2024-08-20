import React from 'react';
import './TokenWatchList.css';

const TokenWatchList = ({ tokens }) => {
  return (
    <div className="token-watch-list">
      <h2>Token Watch List</h2>
      <table>
        <thead>
          <tr>
            <th>Token</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((token, index) => (
            <tr key={index}>
              <td>{token.name}</td>
              <td>{token.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TokenWatchList;
