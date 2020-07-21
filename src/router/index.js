import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Lock from '../views/Lock.vue'

Vue.use(VueRouter)


const routes = [
      {
        path: '/',
        name: 'register',
        component: Register
      },
      {
        path: '/login',
        name: 'login',
        component :Login
      },
      {
        path: '/lock',
        name: 'lock',
        component :Lock
      }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  
})

export default router
