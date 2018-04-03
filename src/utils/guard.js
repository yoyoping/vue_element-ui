import router from '../router'
import { Message } from 'element-ui'
// 路由钩子函数
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title
  // 拦截路由
  let roles
  if (localStorage.loginStatus) {
    roles = localStorage.roles.split('-')

    // 判断是否缓存
    // if (to.meta.keepAlive)
    if (roles.indexOf('admin') !== -1) { // 如果是管理员拥有所有权限
      next()
    } else if (to.meta.role && roles.indexOf(to.meta.role) === -1) {
      Message({
        message: '您没有权限访问该页面',
        type: 'warning',
        duration: 2 * 1000,
        showClose: true
      })
    } else {
      if (from.matched.length !== 0) {
        localStorage.isRefresh_ = '1'
        next()
      }
      next()
    }
  } else {
    roles = []
    if (to.path === '/login') {
      next()
    } else {
      next({ path: '/login' })
    }
  }
})
