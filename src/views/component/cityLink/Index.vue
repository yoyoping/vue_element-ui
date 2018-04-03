<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>三级联动</span>
          </div>
          <Addr @myAddr="myAddr_" ref="addr" datav="1"></Addr>
          <p class="des">您当前选中的是：{{name1}}</p>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>二级联动</span>
          </div>
          <Addr @myAddr="myAddr_" ref="addr" datav="2" :isArea="true"></Addr>
          <p class="des">您当前选中的是：{{name2}}</p>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Addr from '_components/Addr'
export default {
  components: {
    Addr
  },
  data () {
    return {
      name1: '',
      name2: ''
    }
  },
  methods: {
    myAddr_ (name, datav) {
      if (datav === '1') {
        this.name1 = name.join('-')
      } else {
        this.name2 = name.join('-')
      }

    }
  }
}
</script>
<style lang="scss" scoped>
.des{
  margin: 20px 0 10px;
}
</style>
