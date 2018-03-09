// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'Vuex'
import store from './vuex/store.js'
import App from './App'
import router from './router'
import fetch from './utils'
import posts from './utils/post'
import ElementUI, { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import VueQuillEditor from 'vue-quill-editor'
// Vue.use(VueQuillEditor)

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(ElementUI)

// 创建全局请求
Vue.prototype.fetch = fetch
Vue.prototype.postData = posts

// 路由钩子函数
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title
  // 拦截路由
  let roles
  if (localStorage.loginStatus) {
    roles = localStorage.roles.split('-')
  } else {
    roles = []
    if (to.path === '/login') {
      next()
    } else {
      next('/login')
    }
  }

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
    // next('/')
  } else {
    if (from.matched.length !== 0) {
      localStorage.isRefresh_ = '1'
      next()
    }
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
