import {
  userLogin,
  getInfo
} from '@/api/user'
import { setToken } from "@/utils/token";

let state = {
  username: '',
  accessToken: '',
  avatar: '',
},
getters = {
  accessToken: state => state.accessToken,
  username: state => state.username,
  avatar: state => state.avatar,
},
mutations = {
  setAccessToken (state, accessToken) {// 设置accessToken
    state.accessToken = accessToken
  },
  setUsername (state, username) {// 设置用户名
    state.username = username
  },
  setAvatar (state, avatar) {// 设置头像
    state.avatar = avatar
  },
},
actions = {
  login({commit}, userInfo) {
    const {username,password}  = userInfo
    return new Promise((resolve, reject) => {
      userLogin({username: username,password: password}).then(res => {
        if(res.code == 200 && res.data.verifySuccess) {
          setToken(res.data.userInfo.token);
          commit('setUsername', username)
          commit('setAvatar', res.data.userInfo.avatar)
          commit('setAccessToken', res.data.userInfo.token)
          localStorage.setItem('userInfo', JSON.stringify(res.data.userInfo))
          resolve();
        } else {
          reject()
        }
      })
    })
  }
};
export default { state, getters, mutations, actions }