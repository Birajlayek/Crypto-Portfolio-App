exports.getTokens = (req, res) => {
    const tokens = [
      { name: 'ETH', balance: '1.5' },
      { name: 'BTC', balance: '0.3' },
    ];
    res.json(tokens);
  };
  