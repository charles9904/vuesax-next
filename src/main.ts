import { createApp } from "vue"
import App from "./App.vue"
import Vuesax from "./plugin"
import "./assets/styles"
import { createRouter, createWebHistory  } from "vue-router"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: []
});

createApp(App).use(router).use(Vuesax).mount("#app")
