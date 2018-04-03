<template>
  <div>
    <span @click="mod">{{user.message}}</span>
    <span @click="mod">{{user.count}}</span>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: mapState(['user']),
  methods: {
    mod () {
      this.$store.dispatch('setmsg', '李四')
    }
  }
}
</script>
