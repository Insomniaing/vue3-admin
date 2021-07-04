import request from '@/utils/request'
/**
 * 用户登录
 * @param data
 */
export function userLogin(data) {
  return request({
    url: '/api/user',
    method: 'post',
    data,
  })
}

/**
 * 获得用户信息
 */
export function getInfo() {
  return request({
    url: '/managerinfo',
    method: 'get',
  })
}

/**
 * 获得用户的菜单
 */
export function getMenus() {
  return request({
    url: '/managermenus',
    method: 'get',
  })
}
