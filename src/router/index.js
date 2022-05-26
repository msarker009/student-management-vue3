import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/pages/HomePage.vue'
import LoginPage from '../views/auth/LoginPage.vue'
import RegisterPage from '../views/auth/RegisterPage.vue'
import ForgatePassword from '../views/auth/password/ForgatePassword.vue'
import ResetPassword from '../views/auth/password/ResetPassword.vue'
import store from '../store'

const routes = [
  {
    path: '/admin/dashboard',
    name: 'home',
    component: HomePage,
    meta:{
      auth:true
    }
  },
  {
    path: '/',
    name: 'login',
    component: LoginPage,
    meta:{
      guest:true
    }
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterPage,
    meta:{
      guest:true
    }
  },
  {
    path: '/forgate-password',
    name: 'forgate',
    component: ForgatePassword,
    meta:{
      guest:true
    }
  },
  {
    path: '/reset-password',
    name: 'reset',
    component: ResetPassword,
    meta:{
      guest:true
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to) => {
  // instead of having to check every route record with
  // to.matched.some(record => record.meta.requiresAuth)
  if (to.meta.auth && !store.getters.GET_AUTH_STATUS) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    return {
      name: 'login'
    }
  }
  else if (to.meta.guest && store.getters.GET_AUTH_STATUS) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    return {
      name: 'home'
    }
  }
})

export default router
