import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _import_ = file => () => import('../views/' + file + '.vue')

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: _import_('login/Index'),
      meta: {
        title: '登录'
      }
    },
    {
      path: '',
      name: 'index',
      component: _import_('Layout'),
      redirect: '/',
      children: [
        {
          path: '/',
          name: 'index',
          component: _import_('Index'),
          meta: {
            title: '首页'
          }
        }
      ]
    },
    {
      path: '/systemConfig',
      name: 'systemConfig',
      component: _import_('Layout'),
      redirect: '/systemConfig/userList',
      meta: {
        title: '系统配置'
      },
      children: [
        {
          path: 'userList',
          name: 'userList',
          component: _import_('systemConfig/userList/Index'),
          meta: {
            title: '用户管理',
            role: 'user'
          }
        },
        {
          path: 'auth',
          name: 'auth',
          component: _import_('systemConfig/auth/Index'),
          meta: {
            title: '权限配置',
            role: 'user'
          }
        }
      ]
    },
    {
      path: '/component',
      name: 'component',
      component: _import_('Layout'),
      redirect: '/component/editor',
      meta: {
        title: '组件'
      },
      children: [
        {
          path: 'editor',
          name: 'editor',
          component: _import_('component/editor/Index'),
          meta: {
            title: '富文本',
            role: 'user'
          }
        },
        {
          path: 'upload',
          name: 'upload',
          component: _import_('component/upload/Index'),
          meta: {
            title: '文件上传',
            role: 'user'
          }
        },
        {
          path: 'drag',
          name: 'drag',
          component: _import_('component/drag/Index'),
          meta: {
            title: '拖拽排序',
            role: 'admin'
          }
        },
        {
          path: 'cityLink',
          name: 'cityLink',
          component: _import_('component/cityLink/Index'),
          meta: {
            title: '城市联动',
            role: 'admin'
          }
        }
      ]
    },
    {
      path: '',
      name: 'test',
      component: _import_('Layout'),
      redirect: '/test',
      children: [
        {
          path: '/test',
          name: 'index',
          component: _import_('test_/Index'),
          meta: {
            title: '测试'
          }
        }
      ]
    }
  ]
})
