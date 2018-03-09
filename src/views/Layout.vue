<template>
  <div id="app">
    <el-container>
      <el-header>
        <p class="logo"><router-link to="/">LOGO</router-link></p>
      </el-header>
      <el-container class="main_">
        <el-aside width="200px">
          <slide-menu></slide-menu>
        </el-aside>
        <el-container class="rg">
          <el-main>
            <!-- 面包屑 -->
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">系统配置</el-breadcrumb-item>
              <el-breadcrumb-item>用户管理</el-breadcrumb-item>
            </el-breadcrumb>
            <div class="content_ scroll">
              <router-view></router-view>
            </div>
          </el-main>
          <!-- <el-footer>Footer</el-footer> -->
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import SlideMenu from '_views/SlideMenu'
export default {
  name: 'App',
  components: {
    SlideMenu
  }
}
</script>

<style lang="scss">
.el-header, .el-footer {
  background-color: #495060;
  color: #333;
  line-height: 60px;
  color: #fff;
}
.el-footer{
  background-color: #eee;
  color: #666;
  text-align: center;
}
.main_{
  height: calc(100vh - 60px);
}
.content_{
  height: calc(100vh - 134px);
  margin-top: 20px;
  padding: 20px;
  overflow-y: auto;
}
.el-aside {
  background-color: rgb(73, 80, 96);
  color: #333;
  border-right: 1px solid #eee;
  box-sizing: border-box;
  // text-align: center;
}

.el-main {
  background-color: #F5F7F9;
  color: #333;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.rg{
  width: calc(100% - 200px);
}
</style>
