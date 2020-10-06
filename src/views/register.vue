<template>
  <div>
      <login-top Text="注册bilibili" >
          <div slot="right" @click="$router.push('/login')">用户登录</div>
      </login-top>

      <login-text

      label="姓名" 
      class="nameText"
      placeholder="请输入姓名"
      rule="^.{6,16}$"
      @inputChange="res => model.name =res"
      />
      <login-text label="账号"
      placeholder="请输入账号"
      rule="^.{6,16}$"
      @inputChange="res => model.username =res"

      />
      <login-text label="密码"
      placeholder="请输入密码"
      type="password"
      rule="^.{6,16}$"
      @inputChange="res => model.password =res"

      />

      <login-btn Btn="注册" @registerSubmit='registerSubmit'></login-btn>
  </div>
</template>

<script>
import LoginTop from '@/components/common/LoginTop.vue'
import LoginText from '@/components/common/LoginText.vue'
import LoginBtn from '@/components/common/LoginBtn.vue'

import Vue from 'vue';
import { Toast } from 'vant';

Vue.use(Toast);

export default {
    components:{
        LoginTop,
        LoginText,
        LoginBtn
    },
    data(){
        return {
            model:{
                name:'',
                username:'',
                password:''
            }

        }
    },
    methods:{
        async registerSubmit(){
            console.log("按钮点击了");
            console.log(this.model.username);
            let rulg=/^.{6,16}$/
            if(rulg.test(this.model.name) && rulg.test(this.model.username) && rulg.test(this.model.password)){
                console.log("正则验证成功");
                const res = await this.$http.post('/register',this.model)
                console.log(res);

                Toast.success(res.data.msg);
            }else{
                Toast.fail('格式不正确');
            }
        }
    }
}
</script>

<style lang='stylus' scoped>
.nameText
  margin 4vw 0
</style>