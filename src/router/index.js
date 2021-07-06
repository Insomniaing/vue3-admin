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
    path: '/Picture',
    name: 'Picture',
    redirect: '/Picture/wallpaper',
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
    path: '/Record',
    name: 'Record',
    redirect: '/Record/travel',
    component: Layout,
    children: [
      {
        path: 'travel',
        name: 'Travel',
        component: () => import(/* webpackChunkName: "about" */ '../views/Record/Travel'),
        meta: {
          title: '旅行'
        }
      },
      {
        path: 'mood',
        name: 'Mood',
        component: () => import(/* webpackChunkName: "about" */ '../views/Record/Mood'),
        meta: {
          title: '心情'
        }
      }
    ]
  },
  {
    path: '/Setting',
    name: 'Setting',
    redirect: '/Setting/my',
    component: Layout,
    children: [
      {
        path: 'my',
        name: 'My',
        component: () => import(/* webpackChunkName: "about" */ '../views/Setting/My')
      },
      {
        path: 'jurisdiction',
        name: 'Jurisdiction',
        component: () => import(/* webpackChunkName: "about" */ '../views/Setting/Jurisdiction')
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
