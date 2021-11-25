import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/movies/:category',
    name: 'movies',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/watchlist',
    name: 'watchlist',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/comingsoon',
    name: 'comingsoon',
    component: () => import('@/views/Home.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory('/configure-admin/'),
  routes
})

export default router
