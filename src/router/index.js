import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: () => import('@/views/home.vue') },
  { path: '/box', name: 'box', component: () => import('@/views/box.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
