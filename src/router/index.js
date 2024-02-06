import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "homePage",
    component: () => import("@/views/HomePage.vue"),
    meta: {
      title: "Home Page",
    },
  },
  {
    name: "showTodos",
    path: "/show-todos",
    component: () => import("@/views/ShowTodos.vue"),
    meta: {
      title: "Show Tasks",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
