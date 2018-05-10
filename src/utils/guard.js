import router from '../router'
import { Message } from 'element-ui'
let tags // 本地标签
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

      // 跳转的时候添加tag标签
      if (localStorage.tags) {
        tags = JSON.parse(localStorage.tags)
      } else {
        tags = []
      }
      let tagsitem = {
        title: to.meta.title,
        url: to.path,
        name: to.name
      }
      let flagPush = true // 是否能添加进入标签数组
      if (tags.length === 0) {
        tags.push(tagsitem)
      } else {
        tags.forEach(item => {
          if (to.meta.title === item.title) {
            flagPush = false
          }
        })
        if (flagPush) {
          tags.push(tagsitem)
        }
      }
      router.app.$store.commit('TAGS', JSON.stringify(tags))
      // localStorage.pageOpenList = JSON.stringify(tags)
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
