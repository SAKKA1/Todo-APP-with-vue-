<template>
  <my-nav></my-nav>
  <router-view />
</template>

<script setup>
import myNav from "@/components/MyNav.vue";
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
