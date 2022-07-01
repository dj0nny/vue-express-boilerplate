const router = require('express').Router();

const emojiRoute = require('./emoji.route');
const todoRoute = require('./todo.route');

router.use('/emoji', emojiRoute);
router.use('/todo', todoRoute);

module.exports = router;