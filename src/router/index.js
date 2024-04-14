import { createRouter, createWebHashHistory } from 'vue-router'
import AuthorizationView from "@/views/AuthorizationView.vue";

const routes = [
  {
    path: '/',
    name: 'index',
    component: AuthorizationView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
