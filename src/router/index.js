import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/HomePage.vue')
    },
    {
      path: '/addusers',
      name: 'addusers',
      component: () => import('../pages/AddusersPage.vue')
    },
    {
      path: '/result',
      name: 'result',
      component: () => import('../pages/ResultPage.vue')
    },
    {
      path: '/calculate',
      name: 'calculate',
      component: () => import('../pages/CalculatePage.vue')
    }
  ]
})

export default router
