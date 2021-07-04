import axios from 'axios'
// create an axios instance
const baseUrl = 'https://www.fastmock.site/mock/175b9b9c4f6d325b45b9106d1db0070e/api'
const service = axios.create({
  // baseURL: process.env.BASE_API, // url = base url + request url
  baseURL: baseUrl,
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 10000 // request timeout
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 判断是否有token 有token就在头里面设置token
    config.headers['Content-Type'] = 'application/json';
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// 响应拦截器
service.interceptors.response.use(
  response => {
    // 判断请求头是否有newtoken,有则替换登录接口返回的token
    return response.data;
  },
  error => {

    let status = 0
    try {
      status = error.response.status;
    } catch (e) {
      if (error.toString().indexOf('Error: timeout') !== -1) {
        window.$message.error(
          '网络请求超时！',
          { duration: 3000 }
        )
        return Promise.reject(error)
      }
      if (error.toString().indexOf('Error: Network Error') !== -1) {
        window.$message.error(
          '网络请求错误！',
          { duration: 3000 }
        )
        return Promise.reject(error)
      }
    }

    if (status == 403) {
      window.$message.error(
        '您没有此权限！',
        { duration: 5000 }
      )
    } else if (status == 401) {
      console.log(111);
    } else {
      window.$message.error(
        '网络异常请重试',
        { duration: 3000 }
      )
    }
    return Promise.reject(error.response);
  })

export default service
