import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Addusers from '../pages/Addusers.vue'
import Calculate from '../pages/Calculate.vue'
import Result from '../pages/Result.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/addusers',
      name: 'addusers',
      component:  Addusers
    },
    {
      path: '/result',
      name: 'result',
      component: Result
    },
    {
      path: '/calculate',
      name: 'calculate',
      component: Calculate
    },
   
  ]
})

export default router
