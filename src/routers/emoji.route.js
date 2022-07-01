const router = require('express').Router();

const { getEmoji } = require('../controllers/emoji.controller');

router.get('/', getEmoji);

module.exports = router;