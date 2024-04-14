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
    component: HomeView,
    meta: {
      required: true
    }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  // document.title = to.meta.title

  if (to.meta.required) {
    if (localStorage.getItem('token')) {
      next()
    } else {
      alert('Пройдите авторизацию')
      next('/')
    }
  } else {
    next()
  }
})

export default router
