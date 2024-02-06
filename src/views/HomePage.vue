<template>
  <h1>Add New Todo</h1>
  <form action="" @submit.prevent="onAddTodo">
    <input
      class="mb-3"
      type="text"
      placeholder="Enter Your Todo"
      style="width: 500px; height: 50px; font-size: 30px"
      v-model="todoObject.text"
      required
    />
    <br />
    <input
      class="m-3"
      type="date"
      placeholder="from"
      v-model="todoObject.from"
      required
    />

    <input
      class="m-3"
      type="date"
      placeholder="to"
      v-model="todoObject.to"
      required
    />
    <br />
    <input
      class="btn btn-success"
      type="submit"
      value="Add"
      style="width: 100px; height: 50px"
    />
  </form>
</template>
<script setup>
import { onMounted, ref } from "vue";
const todoList = ref([]);
const todoObject = ref({
  text: "",
  from: "",
  to: "",
  createdAt: "",
  id: "",
  isCompleted: false,
});

const onAddTodo = () => {
  todoObject.value.id = todoList.value.length + 1;
  todoObject.value.createdAt = new Date();
  todoList.value.push(todoObject.value);
  addToLocalStorage();
  todoObject.value = {
    text: "",
    from: "",
    to: "",
    createdAt: "",
    id: "",
    isCompleted: false,
  };
  console.log(todoList);
};
const addToLocalStorage = () => {
  localStorage.setItem("todos", JSON.stringify(todoList.value));
};
const updateTodos = () => {
  if (localStorage.getItem("todos")) {
    todoList.value = JSON.parse(localStorage.getItem("todos"));
  }
};
onMounted(() => {
  updateTodos();
});
</script>
