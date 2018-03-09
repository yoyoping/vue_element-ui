<template>
  <el-menu :default-active="$route.name" class="el-menu-vertical-demo" background-color="rgb(73, 80, 96)" text-color="hsla(0,0%,100%,.7)" active-text-color="#fff">
    <el-submenu index="1">
      <template slot="title">
        <i class="icon-xitongpeizhi-on"></i>系统配置
      </template>
      <router-link to="/systemConfig/userList">
        <el-menu-item index="userList">
          <i class="icon-yonghuguanli"></i>用户管理
        </el-menu-item>
      </router-link>
      <router-link to="/systemConfig/auth">
        <el-menu-item index="auth">
          <i class="icon-permissions-user"></i>权限配置
        </el-menu-item>
      </router-link>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">
        <i class="icon-tianjiazujian"></i>组件
      </template>
      <router-link to="/component/editor">
        <el-menu-item index="editor">
          <i class="icon-fuwenbenkuang"></i>富文本
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
  </el-menu>
</template>
<style lang="scss" scoped>
  i{
    margin-right: 6px;
  }
</style>
