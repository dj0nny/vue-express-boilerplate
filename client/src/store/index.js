import { createStore } from 'vuex';

import todo from './modules/todo.module';

export default createStore({
  modules: {
    todo,
  },
});
