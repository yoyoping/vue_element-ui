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
        title: '系统管理'
      },
      children: [
        {
          path: 'auth',
          name: 'auth',
          component: _import_('systemConfig/auth/Index'),
          meta: {
            title: '权限管理',
            role: 'user'
          }
        },
        {
          path: 'account',
          name: 'account',
          component: _import_('systemConfig/account/Index'),
          meta: {
            title: '账号管理',
            role: 'user'
          }
        },
        {
          path: 'role',
          name: 'role',
          component: _import_('systemConfig/role/Index'),
          meta: {
            title: '角色管理',
            role: 'user'
          }
        },
        {
          path: 'menu',
          name: 'menu',
          component: _import_('systemConfig/menu/Index'),
          meta: {
            title: '菜单管理',
            role: 'user'
          }
        },
        {
          path: 'opearteLog',
          name: 'opearteLog',
          component: _import_('systemConfig/opearteLog/Index'),
          meta: {
            title: '操作日志',
            role: 'user'
          }
        }
      ]
    },
    {
      path: 'userList',
      name: 'userList',
      component: _import_('Layout'),
      redirect: '/userList',
      children: [
        {
          path: '/userList',
          name: 'userList',
          component: _import_('userList/Index'),
          meta: {
            title: '用户管理'
          }
        }
      ]
    },
    {
      path: 'adviser',
      name: 'adviser',
      component: _import_('Layout'),
      redirect: '/adviser',
      children: [
        {
          path: '/adviser',
          name: 'adviser',
          component: _import_('adviser/Index'),
          meta: {
            title: '顾问列表'
          }
        }
      ]
    },
    {
      path: 'eva',
      name: 'eva',
      component: _import_('Layout'),
      redirect: '/eva',
      children: [
        {
          path: '/eva',
          name: 'eva',
          component: _import_('eva/Index'),
          meta: {
            title: '评价列表'
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
      path: 'test',
      name: 'test',
      component: _import_('Layout'),
      redirect: '/test',
      children: [
        {
          path: '/test',
          name: 'test',
          component: _import_('test_/Index'),
          meta: {
            title: '测试'
          }
        }
      ]
    }
  ]
})
