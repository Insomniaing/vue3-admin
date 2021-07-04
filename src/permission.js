import router from './router'
import {
  getToken
} from '@/utils/token'
import store from '@/store'

const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
    if (getToken()) {
      let userInfo = JSON.parse(localStorage.getItem('userInfo'))
      store.commit('user/setUsername', userInfo.username)
      store.commit('user/setAvatar', userInfo.avatar)
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