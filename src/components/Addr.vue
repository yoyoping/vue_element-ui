<template>
  <!-- <el-col :span="19" :offset="1"> -->
    <div class="_city">
      <el-select v-model="province" placeholder="请选择" @change="province_">
        <el-option
          v-for="item in provinceList"
          :key="item.id"
          :label="item.name"
          :value="item.id">
        </el-option>
      </el-select>
      <el-select v-model="city" placeholder="请选择" @change="city_" :disabled="citydisabled">
        <el-option
          v-for="item in cityList"
          :key="item.id"
          :label="item.name"
          :value="item.id">
        </el-option>
      </el-select>
      <el-select v-model="area" placeholder="请选择" :disabled="areadisabled" @change="area_" v-if="!isArea && isArea2">
        <el-option
          v-for="item in areaList"
          :key="item.id"
          :label="item.name"
          :value="item.id">
        </el-option>
      </el-select>
    </div>
  <!-- </el-col> -->
</template>
<script>
  import provinceList1 from '_utils/city'
  export default {
    props: ['isArea', 'datav'],
    data () {
      return {
        province: '',
        city: '',
        area: '',
        citydisabled: true, // 默认城市禁止选择
        areadisabled: true, // 默认区域禁止选择
        isArea2: true, // 区域是否显示
        provinceList: provinceList1,
        cityList: [], // 城市列表
        areaList: [], // 区域列表
        name: [] // 名字
      }
    },
    methods: {
      province_ (val) {
        this.provinceList.forEach((res, index) => {
          if (res.id === val) {
            this.cityList = this.provinceList[index].children
            this.name[0] = this.provinceList[index].name
            this.name[1] = undefined
            this.name[2] = undefined
            if (this.provinceList[index].municipality) {
              this.isArea2 = false
            } else {
              this.isArea2 = true
            }
          }
        }, this)
        this.city = ''
        this.area = ''
        this.citydisabled = false
        this.areadisabled = true
        if (this.datav === '1') {
          this.$emit('myAddr', this.name, '1')
        } else {
          this.$emit('myAddr', this.name, '2')
        }

      },
      city_ (val) {
        this.cityList.forEach((res, index) => {
          if (res.id === val) {
            this.areaList = this.cityList[index].children
            this.name[1] = this.cityList[index].name
            this.name[2] = undefined
            // if (this.cityList[index].district) {
            //   this.isArea = true
            // } else {
            //   this.isArea = false
            // }
          }
        }, this)
        this.area = ''
        this.areadisabled = false
        if (this.datav === '1') {
          this.$emit('myAddr', this.name, '1')
        } else {
          this.$emit('myAddr', this.name, '2')
        }
      },
      area_ (val) {
        this.areaList.forEach((res, index) => {
          if (res.id === val) {
            this.areaName = this.areaList[index].name
            this.name[2] = this.areaList[index].name
          }
        })
        if (this.datav === '1') {
          this.$emit('myAddr', this.name, '1')
        } else {
          this.$emit('myAddr', this.name, '2')
        }
      },
      // 重置清空
      reset () {
        this.province = ''
        this.city = ''
        this.area = ''
        this.cityList = ''
        this.areaList = ''
        this.citydisabled = true // 默认城市禁止选择
        this.areadisabled = true // 默认区域禁止选择
        // this.isArea = true // 区域是否显示
      }
    }
  }
</script>
<style lang="scss" scoped>
.el-row{
  margin-top: 20px;
  line-height: 40px;
  .el-col-4{
    text-align: right;
    font-size: 16px;
  }
  em{
    color: red;
    position: relative;
    bottom: 5px;
  }
}
.el-select{
  width: 32.7%;
}
._city{
  width: 100%;

}
</style>
