<template>
<div>
  <vue-editor v-model="content" id="editor-demo"></vue-editor>
  <div class="con">{{content}}</div>
</div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
export default {
  components: {
    VueEditor
  },
  data () {
    return {
      content: 'Some initial content'
    }
  }
}
</script>
<style lang="scss">
.con{
  margin: 50px 0;width: 100%;
  word-wrap: break-word;
  word-break: normal;
}
#editor-demo{
  height: 500px;
}
</style>
