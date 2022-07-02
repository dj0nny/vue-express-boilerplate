<template>
  <TodoList :list="todoList"/>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';

import TodoList from '../components/TodoList.vue';

const store = useStore();

const todoList = computed(() => store.state.todo.todoList);

onMounted(() => {
  store.dispatch('todo/getTodoList');
});
</script>
