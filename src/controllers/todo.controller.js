let todoList = [{
  id: 1,
  todo: 'clean the house',
}];

const getTodo = (req, res) => {
  res.status(200).json(todoList);
}

const addTodo = (req, res) => {
  const { todo } = req.body;

  todoList.push({
    id: Math.ceil(Math.random() * 100),
    todo,
  });

  res.status(200).json(todoList);
}

const updateTodo = (req, res) => {
  const { id } = req.params;
  const { todo } = req.body;

  todoList.forEach((value) => {
    if (value.id == id) {
      value.todo = todo;
    }
  });

  res.status(200).json(todoList);
}

const deleteTodo = (req, res) => {
  const { id } = req.params;
  let filteredArray = [];

  filteredArray = todoList.filter((item) => item.id != id);
  todoList = filteredArray;

  res.status(200).json(filteredArray);

}

module.exports = {
  getTodo,
  addTodo,
  updateTodo,
  deleteTodo,
}