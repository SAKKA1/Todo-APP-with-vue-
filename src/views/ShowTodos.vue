<template>
  <h1 v-if="todoList.length >= 1" class="mb-5">My Tasks</h1>
  <table class="w-100" v-if="todoList.length >= 1">
    <thead>
      <tr>
        <th>Tasks</th>
        <th>From</th>
        <th>To</th>
        <th>CreatedAt</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(todo, index) in todoList"
        :key="todo.id"
        :style="`${
          todo.isCompleted ? 'background: #8dcd92' : 'background:transparent'
        }`"
      >
        <td>{{ todo.text }}</td>
        <td>{{ todo.from }}</td>
        <td>{{ todo.to }}</td>
        <td>{{ new Date(todo.createdAt).toLocaleDateString() }}</td>
        <td>
          <button @click="complateTodo(todo)" class="btn btn-success m-2">
            Complated
          </button>
          <button @click="deleteTodo(index)" class="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
  <div v-else>
    <h1 class="mt-5">No Tasks To Show</h1>
    <p class="text-danger">you must add task</p>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";

const todoList = ref([]);

const updateTodos = () => {
  if (localStorage.getItem("todos")) {
    todoList.value = JSON.parse(localStorage.getItem("todos"));
  }
};
onMounted(() => {
  updateTodos();
});

const deleteTodo = (index) => {
  todoList.value.splice(index, 1);
  addToLocalStorage();
};
const complateTodo = (todo) => {
  todo.isCompleted = !todo.isCompleted;
  addToLocalStorage();
};
const addToLocalStorage = () => {
  localStorage.setItem("todos", JSON.stringify(todoList.value));
};
</script>
<style>
table,
th,
td {
  border: 1px solid black;
}
</style>
