const router = require('express').Router();

const emojiRoute = require('./emoji.route');

router.use('/emoji', emojiRoute);

module.exports = router;