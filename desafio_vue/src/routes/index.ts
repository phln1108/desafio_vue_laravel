import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import HomeView from '../views/Home.vue'
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';

import Main from '../layouts/main.vue';
import Outside from '../layouts/outside.vue';



const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: HomeView,
    meta: {
      layout: Main
    }
  },
  {
    path: '/login',
    component: Login,
    meta: {
      layout: Outside
    }
  },
  {
    path: '/register',
    component: Register,
    meta: {
      layout: Outside
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;