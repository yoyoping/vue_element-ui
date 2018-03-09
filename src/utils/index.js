import posts from './post'
import axios from 'axios'
// import { guid } from './check'
import { Message } from 'element-ui'

// 创建axios实例
const fetch = axios.create({
  // baseURL: 'http://api.com/api/v1', // 代理
  // baseURL: '/api/v1', // 非代理
  baseURL: 'https://www.easy-mock.com/mock/5a62bc9868c0d85c378988bf/yoyoping', // easy-mock
  timeout: 15000
})

// 添加请求拦截器
fetch.interceptors.request.use(config => {
  config.headers['token'] = localStorage.token || ''
  config.headers['deviceid'] = localStorage.deviceid_
  // 在发送请求之前做些什么
  return config
}, error => {
  // 对请求错误做些什么
  console.log(error)
  Message({
    message: '网络服务错误，请稍后尝试',
    type: 'error',
    duration: 5 * 1000,
    showClose: true
  })
  return Promise.reject(error)
})
// 添加响应拦截器
fetch.interceptors.response.use(response => {
  // 对响应数据做点什么
  const res = response.data
  // console.log(res)
  // 200-成功  4001-token过期 5000-暂无数据 4004-未登录
  // if (res.status !== 200 && res.status !== 4001 && res.status !== 5000 && res.status !== 4004 && res.status !== 4013) {
  //   Message({
  //     message: res.msg,
  //     type: 'error',
  //     duration: 2 * 1000,
  //     showClose: true
  //   })
  // }
  // 判断在其他设备登录
  if (res.status === 4004 && localStorage.userType) {
    Message({
      message: '您的账号在其他设备登录',
      type: 'error',
      duration: 2 * 1000,
      showClose: true,
      onClose: function () {
        localStorage.removeItem('userType')
        localStorage.roles = []
        localStorage.loading = ''
        localStorage.removeItem('login')
        location.href = '/'
      }
    })
  }
  if (res.status === 4001) {
    localStorage.token = ''
    const filter = {
      platform: 'win',
      sys_version: '1',
      app_version: '2',
      deviceid: localStorage.deviceid_
    }
    fetch.post(`/token`, posts(filter)).then(resp => {
      if (resp.status === 200) {
        localStorage.token = resp.data.token
        localStorage.imgUrl = resp.data.image_url
        // location.reload()
      }
    })
  }
  return response.data
}, error => {
  Message({
    message: error.message,
    type: 'error',
    duration: 2 * 1000
  })
  return Promise.reject(error)
})
export default fetch
