import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/experience',
      name: 'experience',
      component: () => import('../views/Experience.vue')
    },
    {
      path: '/education',
      name: 'education',
      component: () => import('../views/Education.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/Projects.vue')
    }
  ]
})

export default router
