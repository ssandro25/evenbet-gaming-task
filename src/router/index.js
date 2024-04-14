import { createRouter, createWebHashHistory } from 'vue-router'
import AuthorizationView from "@/views/AuthorizationView.vue";
import HomeView from "@/views/HomeView.vue";

const routes = [
  {
    path: '/',
    name: 'index',
    component: AuthorizationView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
