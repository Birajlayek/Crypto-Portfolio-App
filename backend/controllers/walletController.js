exports.connectWallet = (req, res) => {
  const { address } = req.body;

  if (address) {
    res.json({ success: true, address });
  } else {
    res.status(400).json({ success: false, message: 'Wallet address is required.' });
  }
};
