<template>
  <nav>
    <ul>
      <li v-for="route in router.options.routes" :key="route.name">
        <router-link :to="{ name: route.name }">
          {{ route.meta.title }}</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<style lang="scss" scopped>
nav {
  padding: 30px;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    a {
      font-weight: bold;
      color: #2c3e50;
      font-size: 30px;
      text-decoration: none;
      color: black;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  li {
    list-style: none;
  }
}
</style>
