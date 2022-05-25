import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/pages/HomePage.vue'
import LoginPage from '../views/auth/LoginPage.vue'
import RegisterPage from '../views/auth/RegisterPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
