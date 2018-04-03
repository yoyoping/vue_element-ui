<template>
  <div id="app">
    <el-container>
      <el-header>
        <Herder_></Herder_>
      </el-header>
      <el-container class="main_">
        <el-aside width="200px">
          <slide-menu></slide-menu>
        </el-aside>
        <el-container class="rg">
          <el-main>
            <!-- 面包屑 -->
            <breadcrumb></breadcrumb>
            <div class="content_ scroll">
              <transition name="fade">
                <router-view></router-view>
              </transition>
            </div>
          </el-main>
          <!-- <el-footer>Footer</el-footer> -->
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import SlideMenu from './SlideMenu'
import Herder_ from './Header_'
import breadcrumb from '_components/breadcrumb' //
export default {
  name: 'App',
  components: {
    SlideMenu, Herder_, breadcrumb
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
