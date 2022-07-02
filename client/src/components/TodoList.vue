<template>
  <ul>
    <li v-for="todo in list" :key="todo.id" @click="handleDeleteTodo(todo.id)">
      {{todo.todo}}
    </li>
  </ul>
  <form @submit.prevent="handleAddTodo">
    <input type="text" id="new-todo" name="new-todo" v-model="newTodo">
    <button type="submit">Add todo</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

defineProps({
  list: Array,
});

const store = useStore();
const newTodo = ref('');

const handleAddTodo = () => {
  store.dispatch('todo/addTodo', newTodo.value);
  newTodo.value = '';
};

const handleDeleteTodo = (id) => {
  store.dispatch('todo/deleteTodo', id);
};

</script>
