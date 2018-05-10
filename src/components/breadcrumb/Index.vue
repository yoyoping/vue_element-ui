<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item v-for="item in list" :key="item.name" :to="{ path: item.path }">{{item.meta.title}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script>
export default {
  computed: {
    list () {
      let matched = this.$route.matched
      let arr = []
      matched.forEach(item => {
        if (item.path !== ''){
          arr.push(item)
        }
      }, this)
      // console.log(arr)
      return arr
    }
  }
}
</script>
