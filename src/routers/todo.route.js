const router = require('express').Router();

const { getTodo, addTodo, updateTodo, deleteTodo } = require('../controllers/todo.controller');

router.get('/', getTodo);
router.post('/', addTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

module.exports = router;