import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import PageA from "./App.vue";
import PageB from "./App2.vue";

const routes = [
  { path: "/", component: PageA },
  { path: "/about", component: PageB }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

createApp(PageA).use(router).mount("#app");
