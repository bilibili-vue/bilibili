<template>
  <div>
      <login-top Text="注册bilibili"></login-top>

      <login-text

      label="姓名" 
      class="nameText"
      placeholder="请输入姓名"
      rule="^.{6,16}$"
      @inputChange="res => name =res"
      />
      <login-text label="账号"
      placeholder="请输入账号"
      rule="^.{6,16}$"
      @inputChange="res => uesrname =res"

      />
      <login-text label="密码"
      placeholder="请输入密码"
      type="password"
      rule="^.{6,16}$"
      @inputChange="res => password =res"

      />

      <login-btn Btn="注册"></login-btn>
  </div>
</template>

<script>
import LoginTop from '@/components/common/LoginTop.vue'
import LoginText from '@/components/common/LoginText.vue'
import LoginBtn from '@/components/common/LoginBtn.vue'


export default {
    components:{
        LoginTop,
        LoginText,
        LoginBtn
    },
    data(){
        return {
            name:'',
            username:'',
            password:''
        }
    },
    
}
</script>

<style lang='stylus' scoped>
.nameText
  margin 4vw 0
</style>