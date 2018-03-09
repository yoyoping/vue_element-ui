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
      type="selection"
      align="center"
      width="55">
    </el-table-column>
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
      align="center"
      label="手机">
      <template slot-scope="scope">
        <template v-if="scope.row.edit">
          <el-input size="small" v-model="scope.row.phone"></el-input>
          <!-- <el-button class='cancel-btn' size="small" icon="el-icon-refresh" type="warning" @click="cancelEdit(scope.row)">cancel</el-button> -->
        </template>
        <span v-else>{{scope.row.phone}}</span>
      </template>
    </el-table-column>
    <el-table-column
      align="center"
      label="地址">
      <template slot-scope="scope">
        <template v-if="scope.row.edit">
          <el-input size="small" v-model="scope.row.addr"></el-input>
        </template>
        <span v-else>{{scope.row.addr}}</span>
      </template>
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
          type="success"
          v-if="scope.row.edit"
          size="mini"
          @click="saveEdit(scope.row)">保存
        </el-button>
        <el-button
          v-if="scope.row.edit"
          size="mini"
          @click="cancelEdit(scope.row)">取消
        </el-button>
        <el-button
          v-if="!scope.row.edit"
          type="primary"
          size="mini"
          @click="scope.row.edit = !scope.row.edit">编辑
        </el-button>
        <el-button
          v-if="!scope.row.edit"
          size="mini"
          type="danger"
          @click="handleDelete(scope.row)">删除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
    background
    layout="prev, pager, next"
    :total="1000">
  </el-pagination>
</div>
</template>

<script>
export default {
  data () {
    return {
      maxH: 400, // table最大高度
      formInline: {
        user: '',
        region: ''
      },
      tableData3: [{
        date: '1',
        name: '王小虎',
        phone: '13654785456',
        addr: '四川省成都市',
        integral: '100',
        rule: '角色'
      }, {
        date: '1',
        name: '王小虎',
        phone: '13654785456',
        addr: '四川省成都市',
        integral: '100',
        rule: '角色'
      }, {
        date: '1',
        name: '王小虎',
        phone: '13654785456',
        addr: '四川省成都市',
        integral: '100',
        rule: '角色'
      }, {
        date: '1',
        name: '王小虎',
        phone: '13654785456',
        addr: '四川省成都市',
        integral: '100',
        rule: '角色'
      }, {
        date: '1',
        name: '王小虎',
        phone: '13654785456',
        addr: '四川省成都市',
        integral: '100',
        rule: '角色'
      }, {
        date: '1',
        name: '王小虎',
        phone: '13654785456',
        addr: '四川省成都市',
        integral: '100',
        rule: '角色'
      }, {
        date: '1',
        name: '王小虎',
        phone: '13654785456',
        addr: '四川省成都市',
        integral: '100',
        rule: '角色'
      }, {
        date: '1',
        name: '王小虎',
        phone: '13654785456',
        addr: '四川省成都市',
        integral: '100',
        rule: '角色'
      }, {
        date: '1',
        name: '王小虎',
        phone: '13654785456',
        addr: '四川省成都市',
        integral: '100',
        rule: '角色'
      }, {
        date: '1',
        name: '王小虎',
        phone: '13654785456',
        addr: '四川省成都市',
        integral: '100',
        rule: '角色'
      }, {
        date: '1',
        name: '王小虎',
        phone: '13654785456',
        addr: '四川省成都市',
        integral: '100',
        rule: '角色'
      }]
    }
  },
  created () {
    let h = document.documentElement.clientHeight || document.body.clientHeight
    this.maxH = h - (134 + 40 + 62 + 112)
  },
  mounted () {
    this.editState()
  },
  methods: {
    editState () {
      this.tableData3.map(val => {
        this.$set(val, 'edit', false)
        val.originalPhone = val.phone
        val.originalAddr = val.addr
        return val
      })
      console.log(this.tableData3)
    },
    // 保存编辑
    saveEdit (row) {
      row.edit = false
      row.originalPhone = row.phone
      row.originalAddr = row.addr
      this.$message.success('保存成功')
    },
    // 取消编辑
    cancelEdit (row) {
      row.edit = false
      row.phone = row.originalPhone
      row.addr = row.originalAddr
    },
    handleDelete (row) {
      this.$confirm('确定删除此用户?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message.success('删除成功!')
      }).catch(() => {
        this.$message.info('取消删除!')
      })
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
// .el-table{
//   max-height: 250px !important;
// }
// .el-table--scrollable-y{
//   max-height: 200px !important;
// }
</style>
