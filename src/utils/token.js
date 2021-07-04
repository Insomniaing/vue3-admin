import Cookies from 'js-cookie'

const TokenKey = 'admin_token_key'

/**
 * 从cookie中获得token
 */
export function getToken() {
  return Cookies.get(TokenKey)
  // return true
}

/**
 * 设置cookie中的token
 */
export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

/**
 * 删除cookie中的token
 */
export function removeToken() {
  return Cookies.remove(TokenKey)
}
