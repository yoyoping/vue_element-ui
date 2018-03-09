<template>
  <div>
    <el-row>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="font-weight: bold">
            <i class="el-icon-tickets"></i>
            可拖拽排序的列表
          </span>
          <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
        </div>
        <ul id="todoList" class="scroll">
          <li v-for="(item, index) in todoList" :key="index" :data-index="index">{{item.content}}</li>
        </ul>
      </el-card>
    </el-row>
    <el-row class="mt" :gutter="20">
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>
              <i class="el-icon-sort"></i>
              未完成任务（不能排序）
            </span>
            <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
          </div>
          <ul id="nodoList" class="scroll">
            <li v-for="(item, index) in nodoList" :key="index" :data-index="index">{{item.content}}</li>
          </ul>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>
              <i class="el-icon-sort"></i>
              已完成任务
            </span>
            <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
          </div>
          <ul id="doList" class="scroll">

          </ul>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>
              <i class="el-icon-sort"></i>
              已完成任务清单
            </span>
            <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
          </div>
          <ul id="ydoList" class="scroll">
            <li v-for="(item, index) in doneList" :key="index" :data-index="index">{{item.content}}</li>
          </ul>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Sortable from 'sortablejs'
export default {
  data () {
    return {
      todoList: [
        {
          content: '这是第1条数据'
        },
        {
          content: '这是第2条数据'
        },
        {
          content: '这是第3条数据'
        },
        {
          content: '这是第4条数据'
        },
        {
          content: '这是第5条数据'
        },
        {
          content: '这是第6条数据'
        },
        {
          content: '这是第7条数据'
        },
        {
          content: '这是第8条数据'
        },
        {
          content: '这是第9条数据'
        },
        {
          content: '这是第10条数据'
        }
      ],
      nodoList: [
        {
          content: '搭建项目框架'
        },
        {
          content: '切图'
        },
        {
          content: '开发项目'
        },
        {
          content: '修改bug'
        },
        {
          content: '打包上线'
        },
        {
          content: '更新维护'
        },
        {
          content: '清除重建'
        }
      ],
      doneList: []
    }
  },
  mounted () {
    document.body.ondrop = function (event) {
      event.preventDefault()
      event.stopPropagation()
    }

    // 拖动排序
    let todoList = document.getElementById('todoList')
    let sortaleArr
    let todoListSort = Sortable.create(todoList, {
      group: {
        name: 'list',
        pull: true
      },
      animation: 120,
      ghostClass: 'placeholder-style',
      onUpdate: (event) => {
        console.log(event)
        // 排序序列
        sortaleArr = todoListSort.toArray()
        console.log(sortaleArr)
      }
      // fallbackClass: 'iview-admin-cloned-item',
    })
    sortaleArr = todoListSort.toArray()
    console.log(sortaleArr)

    // 未完成任务
    let nodoList = document.getElementById('nodoList')
    Sortable.create(nodoList, {
      group: {
        name: 'list',
        pull: true
      },
      filter: '.iview-admin-draggable-delete',
      animation: 120,
      fallbackClass: 'iview-admin-cloned-item',
      onRemove: (event) => {
        this.doneList.splice(event.newIndex, 0, this.nodoList[event.item.getAttribute('data-index')])
      }
    })

    // 已完成任务
    let doList = document.getElementById('doList')
    Sortable.create(doList, {
      group: {
        name: 'list',
        pull: true
      },
      sort: false,
      filter: '.iview-admin-draggable-delete',
      animation: 120,
      fallbackClass: 'iview-admin-cloned-item',
      onRemove: (event) => {
        this.doneList.splice(event.oldIndex, 1)
      }
    })
  }
}
</script>
<style lang="scss" scoped>
li{
  width: 100%;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
  list-style: 40px;
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 0 15px;
  overflow: hidden;
  margin-bottom: 10px;
  &:hover{
    border-color: #87b4ee;
    color: #87b4ee;
  }
}
#todoList{
  padding: 0 50px;
}
.scroll{
  height: 300px;
  overflow-y: auto;
}
.mt{
  margin-top: 20px;
}
</style>
