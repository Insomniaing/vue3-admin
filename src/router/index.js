import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout'
const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login'),
    hidden: true
  },
  {
    path: '/',
    name: 'Home',
    redirect: '/board',
    component: Layout,
    children: [
      {
        path: 'board',
        name: 'Board',
        component: () => import(/* webpackChunkName: "about" */ '../views/Board')
      }
    ]
  },
  {
    path: '/picture',
    name: 'Picture',
    redirect: '/picture/wallpaper',
    component: Layout,
    children: [
      {
        path: 'wallpaper',
        name: 'Wallpaper',
        component: () => import(/* webpackChunkName: "about" */ '../views/Picture/Wallpaper.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/noFind.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
