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
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/:category',
      name: 'category',
      component: () => import('../views/CategoryView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'page-not-found',
      component: () => import('../views/PageNotFoundView.vue')
    }
  ]
})

export default router
