<template>
  <el-row type="flex" justify="space-between">
    <el-col :span="4">
      <p class="logo"><router-link to="/">LOGO</router-link></p>
    </el-col>
    <el-col :span="2">
      <div class="user" @mouseover="flag = true" @mouseout="flag = false">
        <img src="~_assets/images/aa.jpg" class="opa" alt="">
        <ul v-show="flag">
          <li @click="exit">注销</li>
          <li @click="exit">退出</li>
        </ul>
      </div>
    </el-col>
  </el-row>
</template>
<script>
export default {
  data () {
    return {
      flag: false
    }
  },
  created () {
    // this.getlist()
  },
  methods: {
    exit () {
      this.$confirm('即将退出，是否继续?', '退出提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$router.push('/login')
          localStorage.removeItem('loginStatus')
          localStorage.removeItem('userInfo')
          localStorage.removeItem('roles')
        }).catch(() => {

        })
    },
    getlist () {
      // 这里是调取自己本地nodejs的接口要进行代理，baseUrl也要改为空
      this.fetch.get('/api/del_user').then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.el-header, .el-footer {
  background-color: #495060;
  color: #333;
  line-height: 60px;
  color: #fff;
}
.user{
  .opa{
    width: 50px;height: 50px;margin-top: 5px;
    border-radius: 50%;display: block;
  }
  ul{
    width: 100px;background-color: #495060;position: relative;z-index:2;padding: 0 10px;
    li{
      width: 100%;height: 40px;border-bottom: 1px solid #ccc;line-height: 40px;cursor: pointer;
      &:last-child{
        border-bottom: none;
      }
    }
  }
}
</style>
