<template>
  <div>
    <el-tag
      v-for="(tag, index) in tags"
      :key="tag.title"
      :type="type_(tag.name)"
      :closable="tag.name !== 'index'"
      size="medium"
      :disable-transitions="false"
      @close="handleClose(index, tag.name)">
      <a @click="link_(tag.url)">
        {{tag.title}}
      </a>
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
        return JSON.parse(this.$store.state.app.tags)
      }
    },
    created () {
      console.log(this.$route.name)
    },
    methods: {
      handleClose(index, name) {
        this.tags.splice(index, 1)
        console.log(this.tags)
        if (name === this.$route.name) {
          let url = this.tags[this.tags.length - 1].url;
          this.$router.push(url)
        }

        this.$store.commit('TAGS', JSON.stringify(this.tags))
      },
      type_ (name) {
        if(name === this.$route.name) {
          return ''
        } else {
          return 'info'
        }
      },
      link_ (url) {
        this.$store.commit('SET_KEEP', true)
        this.$router.push({ path: url, query: { isKeep: true }})
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

