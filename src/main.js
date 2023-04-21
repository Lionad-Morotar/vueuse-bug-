import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import Main from "./main.vue";
import PageA from "./App.vue";
import PageB from "./App2.vue";

const routes = [
  { path: "/page-a", component: PageA },
  { path: "/page-b", component: PageB }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

createApp(Main).use(router).mount("#app");
