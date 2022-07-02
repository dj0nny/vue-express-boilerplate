import axios from 'axios';

export default {
  namespaced: true,
  state: {
    todoList: null,
  },
  mutations: {
    setTodo(state, payload) {
      state.todoList = payload;
    },
  },
  actions: {
    async getTodoList({ commit }) {
      const { data } = await axios.get('/api/todo');
      commit('setTodo', data);
    },
    async addTodo({ commit }, payload) {
      const { data } = await axios.post('/api/todo', {
        todo: payload,
      });
      commit('setTodo', data);
    },
    async deleteTodo({ commit }, payload) {
      const { data } = await axios.delete(`/api/todo/${payload}`);
      console.log(data);
      commit('setTodo', data);
    },
  },
};
