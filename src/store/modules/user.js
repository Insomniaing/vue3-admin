let state = {
  username: 'sixfeetunder',
  accessToken: 'admin',
  avatar: 'https://apic.douyucdn.cn/upload/avanew/face/201702/25/08/9f4bb5f46e368ee01b01c7215cfcfb16_middle.jpg',
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
};
export default { state, getters, mutations, actions }