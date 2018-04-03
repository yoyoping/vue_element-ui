// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
import store from './vuex'
import App from './App'
import router from './router'
import fetch from './utils'
import posts from './utils/post'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './utils/guard'
// import VueQuillEditor from 'vue-quill-editor'
// Vue.use(VueQuillEditor)

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(ElementUI)

// 创建全局请求
Vue.prototype.fetch = fetch
Vue.prototype.postData = posts

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
