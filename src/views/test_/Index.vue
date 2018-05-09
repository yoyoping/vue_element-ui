<template>
  <div>
    <span @click="mod">{{user.message}}</span>
    <span @click="mod">{{user.count}}</span>
    <el-button @click="minusCount">-</el-button>
    <el-button @click="addCount">+</el-button>
    <el-button @click="MultiplyCount(100)">点击事件名不同修改</el-button>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: mapState(['user']),
  methods: {
    mod () {
      this.$store.dispatch('setmsg', '哈哈')
    },
    ...mapActions(['minusCount', 'addCount']),
    ...mapActions({
      MultiplyCount: 'setcount'
    })
  }
}
</script>
