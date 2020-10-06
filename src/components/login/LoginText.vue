<template>
  <div class="LoginText">
      <van-field 
      v-model="text" 
      :label="label"
      :type="type"
      :placeholder="placeholder"
      :rule="rule"
       />
  </div>
</template>

<script>
import Vue from 'vue';
import { Field } from 'vant';

Vue.use(Field);

export default {
    props:['label','placeholder','type','rule'],
    
    data(){
      return{
        text:''
      }
    },

    methods:{
      handlerulg(){
        const rule=new RegExp(this.rule)
        if(rule.test(this.text)){
          console.log("符合正则")
          this.$emit('inputChange',this.text)
        }
      }
    },

    watch:{
      text(){
        this.handlerulg()
      }
    }
}
</script>

<style lang='stylus' scoped>
</style>