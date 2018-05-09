<template>
  <el-menu :default-active="$route.name" class="el-menu-vertical-demo" background-color="rgb(73, 80, 96)" text-color="#C9CBD0" active-text-color="#fff">
    <el-submenu index="1">
      <template slot="title">
        <i class="iconfont icon-xitongguanli"></i>
        <span>系统管理</span>
      </template>
      <router-link to="/systemConfig/auth">
        <el-menu-item index="auth">
          <i class="iconfont icon-erji-quanxianguanli"></i>权限管理
        </el-menu-item>
      </router-link>
      <router-link to="/systemConfig/account">
        <el-menu-item index="account">
          <i class="iconfont icon-weibiaoti5"></i>账户管理
        </el-menu-item>
      </router-link>
      <router-link to="/systemConfig/role">
        <el-menu-item index="role">
          <i class="iconfont icon-jiaoseguanli"></i>角色管理
        </el-menu-item>
      </router-link>
      <router-link to="/systemConfig/menu">
        <el-menu-item index="menu">
          <i class="iconfont icon-caidan"></i>菜单管理
        </el-menu-item>
      </router-link>
      <router-link to="/systemConfig/opearteLog">
        <el-menu-item index="opearteLog">
          <i class="iconfont icon-caozuorizhi"></i>操作日志
        </el-menu-item>
      </router-link>
    </el-submenu>
    <router-link to="/userList">
      <el-menu-item index="userList">
        <i class="iconfont icon-yonghuguanli"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
    </router-link>
    <router-link to="/adviser">
      <el-menu-item index="adviser">
        <i class="iconfont icon-fuwuguwen"></i>
        <span slot="title">顾问列表</span>
      </el-menu-item>
    </router-link>
    <router-link to="/eva">
      <el-menu-item index="eva">
        <i class="iconfont icon-pingjia"></i>
        <span slot="title">评价列表</span>
      </el-menu-item>
    </router-link>
    <el-submenu index="2">
      <template slot="title">
        <i class="iconfont icon-tianjiazujian"></i>
        <span>组件</span>
      </template>
      <router-link to="/component/editor">
        <el-menu-item index="editor">
          <i class="iconfont icon-fuwenbenkuang"></i>富文本
        </el-menu-item>
      </router-link>
      <router-link to="/component/upload">
        <el-menu-item index="upload">
          <i class="iconfont icon-wenjianshangchuan"></i>文件上传
        </el-menu-item>
      </router-link>
      <router-link to="/component/drag">
        <el-menu-item index="drag">
          <i class="iconfont icon-paixu-jiangxu"></i>拖拽排序
        </el-menu-item>
      </router-link>
      <router-link to="/component/cityLink">
        <el-menu-item index="cityLink">
          <i class="iconfont icon-liandongcelve"></i>城市联动
        </el-menu-item>
      </router-link>
    </el-submenu>
    <router-link to="/test">
      <el-menu-item index="test">
        <i class="iconfont icon-ceshi"></i>
        <span slot="title">测试</span>
      </el-menu-item>
    </router-link>
  </el-menu>
  <!-- <el-menu
    :default-active="$route.name"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    background-color="rgb(73, 80, 96)"
    text-color="hsla(0,0%,100%,.7)"
    active-text-color="#fff">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>系统管理</span>
      </template>
      <router-link to="/systemConfig/auth">
        <el-menu-item index="1-1"><i class="el-icon-location"></i>权限管理</el-menu-item>
      </router-link>
      <router-link to="/systemConfig/userList">
        <el-menu-item index="1-2"><i class="el-icon-location"></i>账户管理</el-menu-item>
      </router-link>
      <router-link to="/systemConfig/userList">
        <el-menu-item index="1-2"><i class="el-icon-location"></i>角色管理</el-menu-item>
      </router-link>
      <router-link to="/systemConfig/userList">
        <el-menu-item index="1-2"><i class="el-icon-location"></i>菜单管理</el-menu-item>
      </router-link>
      <router-link to="/systemConfig/userList">
        <el-menu-item index="1-2"><i class="el-icon-location"></i>操作日志</el-menu-item>
      </router-link>
    </el-submenu>
    <router-link to="/systemConfig/userList">
      <el-menu-item index="2">
        <i class="icon-permissions-user"></i>
        <span slot="title">顾问列表</span>
      </el-menu-item>
    </router-link>
    <router-link to="/systemConfig/userList">
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">评价列表</span>
      </el-menu-item>
    </router-link>
    <router-link to="/systemConfig/userList">
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
    </router-link>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span>组件</span>
      </template>
      <router-link to="/component/editor">
        <el-menu-item index="editor">
          <i class="el-icon-menu"></i>富文本
        </el-menu-item>
      </router-link>
      <router-link to="/component/upload">
        <el-menu-item index="upload">
          <i class="icon-fuwenbenkuang"></i>文件上传
        </el-menu-item>
      </router-link>
      <router-link to="/component/drag">
        <el-menu-item index="drag">
          <i class="icon-fuwenbenkuang"></i>拖拽排序
        </el-menu-item>
      </router-link>
      <router-link to="/component/cityLink">
        <el-menu-item index="cityLink">
          <i class="icon-fuwenbenkuang"></i>城市联动
        </el-menu-item>
      </router-link>
    </el-submenu>
    <router-link to="/test">
      <el-menu-item index="test">
        <i class="el-icon-setting"></i>
        <span slot="title">测试</span>
      </el-menu-item>
    </router-link>
  </el-menu> -->
</template>
<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
<style lang="scss" scoped>
  i{
    margin-right: 6px;display: inline-block;width: 16px !important;
  }
</style>
