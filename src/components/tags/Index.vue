<template>
  <div>
    <!-- <el-tag type="info" size="medium">
      <router-link to="/">首页</router-link>
    </el-tag> -->
    <el-tag
      :key="tag.title"
      v-for="tag in tags"
      closable
      size="medium"
      :disable-transitions="false"
      @close="handleClose(tag)">
      <router-link :to="tag.url">
        {{tag.title}}
      </router-link>
    </el-tag>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        dynamicTags: ['标签一', '标签二', '标签三'],
        inputVisible: false,
        inputValue: ''
      };
    },
    computed: {
      tags () {
        debugger
        return JSON.parse(this.$store.state.app.tags)
      }
    },
    methods: {
      handleClose(tag) {
        debugger
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      }
    }
  }
</script>
<style>
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>

