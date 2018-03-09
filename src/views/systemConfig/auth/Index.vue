<template>
<div>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="姓名">
      <el-input v-model="formInline.user" size="medium" placeholder="请输入姓名"></el-input>
    </el-form-item>
    <el-form-item label="角色">
      <el-select v-model="formInline.region" size="medium" placeholder="角色">
        <el-option label="超级管理员" value="shanghai"></el-option>
        <el-option label="普通用户" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" size="medium">查询</el-button>
    </el-form-item>
  </el-form>
  <el-table
    :data="tableData3"
    :max-height="maxH"
    border
    stripe
    style="width: 100%">
    <el-table-column
      prop="date"
      label="ID"
      align="center">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      align="center">
    </el-table-column>
    <el-table-column
      prop="phone"
      align="center"
      label="手机">
    </el-table-column>
    <el-table-column
      prop="addr"
      align="center"
      label="地址">
    </el-table-column>
    <el-table-column
      prop="integral"
      align="center"
      label="积分">
    </el-table-column>
    <el-table-column
      prop="rule"
      align="center"
      label="角色">
    </el-table-column>
    <el-table-column label="操作" align="center" width="180">
      <template slot-scope="scope">
        <el-button
          @click="dialogVisible = true"
          type="primary"
          size="mini">修改
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
    background
    layout="prev, pager, next"
    :total="1000">
  </el-pagination>

  <!-- 弹窗 -->
  <el-dialog
    @close="close"
    top="23vh"
    center
    title="权限修改"
    :visible.sync="dialogVisible"
    width="547px">
    <el-transfer v-model="value1" :data="data" @change="_change" :left-default-checked="leftcheck" :right-default-checked="rightcheck" :titles="['全部权限', '当前权限']"></el-transfer>
  </el-dialog>
</div>
</template>

<script>
export default {
  data () {
    const generateData = _ => {
      const data = []
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `备选项 ${ i }`,
          disabled: i % 4 === 0
        })
      }
      return data
    }
    return {
      leftcheck: [],
      rightcheck: [],
      data: generateData(),
      value1: [1, 4],
      dialogVisible: false, // 权限弹窗是否显示
      maxH: 400, // table最大高度
      formInline: {
        user: '',
        region: ''
      },
      tableData3: []
    }
  },
  created () {
    this.getUserlist()
  },
  mounted () {
  },
  methods: {
    // 获取数据
    getUserlist () {
      this.fetch.get('/userlist').then(res => {
        console.log(res)
        this.tableData3 = res.data.list
        let h = document.documentElement.clientHeight || document.body.clientHeight
        this.maxH = h - (134 + 40 + 62 + 112)
      })
    },
    _change (data, type) {
      // 移动之前拥有的权限
      const arr = []
      this.data.forEach(obj => {
        if (data.indexOf(obj.key) !== -1) {
            arr.push(obj.label)
        }
      }, this)
      console.log(this.value1)
      console.log(arr)
      this.open(`当前拥有的权限：${arr.join(',')}`)
    },
    // 权限修改后的提示
    open (message) {
      const h = this.$createElement
      this.$notify({
        title: '权限修改',
        type: 'success',
        message: (message)
      })
    },
    // 弹窗关闭
    close () {
      this.leftcheck = []
      this.rightcheck = []
    }
  }
}
</script>
<style lang="scss" scoped>
.edit-input {
  padding-right: 100px;
}
.cancel-btn {
  position: absolute;
  right: 15px;
  top: 12px;
}
</style>
