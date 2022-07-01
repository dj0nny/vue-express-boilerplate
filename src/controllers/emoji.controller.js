const getEmoji = (req, res) => {
  res.status(200).json(['🍕', '🍔', '🍟', '🌭']);
}

module.exports = {
  getEmoji,
};