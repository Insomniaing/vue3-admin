import router from './router'
import {
  getToken
} from '@/utils/token'
const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
    if (getToken()) {
      // 已登录且要跳转的页面是登录页
      if (to.path === '/login') {
        next({
          name: 'Home'
        })
      } else {
        next()
      }
    } else {
      // 没有登录
      if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
        next()
      }else {
        next({
          name: 'Login'
        })
      }
    }
})