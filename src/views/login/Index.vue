<template>
  <div class="login-cms">
    <section>
      <h2>后台登录系统</h2>
      <el-form :model="formData" ref="formData" :rules="rules" class="demo-ruleForm">
        <el-form-item prop="phone">
          <el-input v-model="formData.phone" placeholder="phone" auto-complete="on" prefix-icon="icon-iconzh1"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model="formData.password" auto-complete="on" prefix-icon="icon-icon2" placeholder="password"></el-input>
        </el-form-item>
      </el-form>
      <el-row>
        <el-col :span="24" class="user">
          <a href="javascript:;" @click="choUser(0)">admin:超级管理员，拥有所有权限</a>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24" class="user">
          <a href="javascript:;" @click="choUser(1)">user:普通用户，拥有部分权限</a>
        </el-col>
      </el-row>
      <el-button type="primary" @click="submitForm('formData')">提交</el-button>
    </section>
  </div>
</template>
<script>
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
let roles_ = [] // 权限
export default {
  data () {
    return {
      formData: {
        phone: 'admin',
        password: '123456'
      },
      rules: {
        phone: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 模拟接口
          const mock = new MockAdapter(axios)
          mock.onPost('/login', {
              params: {
                phone: this.formData.phone,
                password: this.formData.password
              }
            }).reply(config => {
            const params = JSON.parse(config.data).params // 上传的参数
            if (params.phone === 'admin') {
              roles_ = ['admin']
            } else if (params.phone === 'user') {
              roles_ = ['user']
            }
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                if (params.phone !== 'admin' && params.phone !== 'user') {
                  reject({
                    status: 200,
                    message: '不存在此账号'
                  })
                } else {
                  resolve ([200, {
                    userInfo: {
                      name: 'yoyoping',
                      roles: roles_
                    }
                  }])
                }
              }, 4)
            })
            // return [200, {
            //   userInfo: {
            //     name: 'yoyoping',
            //     roles: roles_
            //   }
            // }]
          })
          axios.post('/login', {params: {
            phone: this.formData.phone,
            password: this.formData.password
          }}).then(res => {
            console.log(res)
            localStorage.loginStatus = true
            localStorage.userInfo = JSON.stringify(res.data.userInfo)
            localStorage.roles = res.data.userInfo.roles.join('-')
            this.$router.push('/')
          }).catch(err => {
            this.$message.error(err.message)
          })
          // const testAsync = async () => {
          //   const res = await this.fetch.post('/login')
          //   if (res.status === 200) {
          //     localStorage.loginStatus = true
          //     localStorage.userInfo = JSON.stringify(res.data)
          //     localStorage.roles = res.data.roles.join('-')
          //     this.$router.push('/')
          //   }
          // }
          // testAsync()
        }
      })
    },
    // 选择账号
    choUser (type) {
      if (type === 0) {
        this.formData.phone = 'admin'
      } else {
        this.formData.phone = 'user'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.login-cms {
  width: 100vw;
  height: 100vh;
  background-color: #2d3a4b;
  color: #fff;
}
section{
  width: 500px;
  height: 370px;
  border: 1px solid #3E4957;
  border-radius: 8px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  padding: 20px;
  text-align: center;
}
h2{
  margin-bottom: 40px;
}
.user{
  font-size: 14px;
  display: block;
  text-align: left;
  padding: 0 10px;
  margin: 8px 0;
  a{
    &:hover{
    color: #409EFF;
    text-decoration: underline;
  }
  }
}
</style>
