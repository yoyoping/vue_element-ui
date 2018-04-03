<template>
  <div>
    <el-row>
      <el-col :span="12">
        <div id="myChartBar" class="chart" :style="{width: '100%',height: '300px'}"></div>
      </el-col>
      <el-col :span="12">
        <div id="myChartLine" class="chart" :style="{width: '100%',height: '300px'}"></div>
      </el-col>
    </el-row>
    <div id="myChartRiver" class="chart" :style="{width: '100%',height: '450px'}"></div>
  </div>
</template>
<script>
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/bar')
require('echarts/lib/chart/line')
require('echarts/lib/chart/themeRiver')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
export default {
  data () {
    return {
    }
  },
  mounted () {
    this.drawBar()
    this.drawLine()
    this.drawRiver()
  },
  methods: {
    drawBar () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('myChartBar'))
      // 绘制图表
      myChart.setOption({
        tooltip: {},
        xAxis: {
          data: ['一月份', '二月份', '三月份', '四月份', '五月份', '六月份', '七月份', '八月份', '九月份', '十月份', '十一月份', '十二月份']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 13, 20, 40, 28, 65, 32, 49, 55]
        }],
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
              offset: 0, color: '#27ACCF' // 0% 处的颜色
          }, {
              offset: 1, color: '#1471E9' // 100% 处的颜色
          }],
          globalCoord: false // 缺省为 false
      }
      })
    },
    drawLine () {
      let myChart = echarts.init(document.getElementById('myChartLine'))
      let option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            areaStyle: {normal: {}},
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            areaStyle: {normal: {}},
            data: [820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      }
      myChart.setOption(option)
    },
    drawRiver () {
      let myChart = echarts.init(document.getElementById('myChartRiver'))
      var rawData = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 49, 67, 16, 0, 19, 19, 0, 0, 1, 10, 5, 6, 1, 1, 0, 25, 0, 0, 0],
        [0, 6, 3, 34, 0, 16, 1, 0, 0, 1, 6, 0, 1, 56, 0, 2, 0, 2, 0, 0],
        [0, 8, 13, 15, 0, 12, 23, 0, 0, 1, 0, 1, 0, 0, 6, 0, 0, 1, 0, 1],
        [0, 9, 28, 0, 91, 6, 1, 0, 0, 0, 7, 18, 0, 9, 16, 0, 1, 0, 0, 0],
        [0, 3, 42, 36, 21, 0, 1, 0, 0, 0, 0, 16, 30, 1, 4, 62, 55, 1, 0, 0],
        [0, 7, 13, 12, 64, 5, 0, 0, 0, 8, 17, 3, 72, 1, 1, 53, 1, 0, 0, 0],
        [1, 14, 13, 7, 8, 8, 7, 0, 1, 1, 14, 6, 44, 8, 7, 17, 21, 1, 0, 0],
        [0, 6, 14, 2, 14, 1, 0, 0, 0, 0, 2, 2, 7, 15, 6, 3, 0, 0, 0, 0],
        [0, 9, 11, 3, 0, 8, 0, 0, 14, 2, 0, 1, 1, 1, 7, 13, 2, 1, 0, 0],
        [0, 7, 5, 10, 8, 21, 0, 0, 130, 1, 2, 18, 6, 1, 5, 1, 4, 1, 0, 7],
        [0, 2, 15, 1, 5, 5, 0, 0, 6, 0, 0, 0, 4, 1, 3, 1, 17, 0, 0, 9],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [6, 27, 26, 1, 0, 11, 1, 0, 0, 0, 1, 1, 2, 0, 0, 9, 1, 0, 0, 0],
        [31, 81, 11, 6, 11, 0, 0, 0, 0, 0, 0, 0, 3, 2, 0, 3, 14, 0, 0, 12],
        [19, 53, 6, 20, 0, 4, 37, 0, 30, 86, 43, 7, 5, 7, 17, 19, 2, 0, 0, 5],
        [0, 22, 14, 6, 10, 24, 18, 0, 13, 21, 5, 2, 13, 35, 7, 1, 8, 0, 0, 1],
        [0, 56, 5, 0, 0, 0, 0, 0, 7, 24, 0, 17, 7, 0, 0, 3, 0, 0, 0, 8],
        [18, 29, 3, 6, 11, 0, 15, 0, 12, 42, 37, 0, 3, 3, 13, 8, 0, 0, 0, 1],
        [32, 39, 37, 3, 33, 21, 6, 0, 4, 17, 0, 11, 8, 2, 3, 0, 23, 0, 0, 17],
        [72, 15, 28, 0, 0, 0, 0, 0, 1, 3, 0, 35, 0, 9, 17, 1, 9, 1, 0, 8],
        [11, 15, 4, 2, 0, 18, 10, 0, 20, 3, 0, 0, 2, 0, 0, 2, 2, 30, 0, 0],
        [14, 29, 19, 3, 2, 17, 13, 0, 7, 12, 2, 0, 6, 0, 0, 1, 1, 34, 0, 1],
        [1, 1, 7, 6, 1, 1, 15, 1, 1, 2, 1, 3, 1, 1, 9, 1, 1, 25, 1, 72]
      ]

      var labels = [
        'The Sea and Cake',
        'Andrew Bird',
        'Laura Veirs',
        'Brian Eno',
        'Christopher Willits',
        'Wilco',
        'Edgar Meyer',
        'B\xc3\xa9la Fleck',
        'Fleet Foxes',
        'Kings of Convenience',
        'Brett Dennen',
        'Psapp',
        'The Bad Plus',
        'Feist',
        'Battles',
        'Avishai Cohen',
        'Rachael Yamagata',
        'Norah Jones',
        'B\xc3\xa9la Fleck and the Flecktones',
        'Joshua Redman'
      ]

      var data = []
      for (var i = 0; i < rawData.length; i++) {
        for (var j = 0; j < rawData[i].length; j++) {
          var label = labels[i]
          data.push([
            j, rawData[i][j], label
          ])
        }
      }
      let option = {
        singleAxis: {
          max: 'dataMax'
        },
        series: [{
          type: 'themeRiver',
          data: data,
          label: {
            normal: {
              show: false
            }
          }
        }]
      }
      myChart.setOption(option)
    }
  }
}
</script>
<style lang="scss" scoped>
.chart{
  background-color: #fff !important;
  float: left;
  &:nth-of-type(even){
    float: right;
  }
}
#myChartRiver{
  margin-top: 30px;
}
</style>
