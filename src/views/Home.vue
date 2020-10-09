<template>
  <div class="home">
      <nav-bar></nav-bar> 
        <van-tabs color="#fb7299" class="nav" @click="changeContent1" >
           <van-tab v-for="(item1,index1) in category" :key="index1" :title="item1.name" >
              <!-- 内容 {{ index }}  -->
              <div class="carouselBox" v-if=!item1.rid>
                <lunbo></lunbo>
              </div>
              <van-tabs color="#fb7299" :class="{navtwo:!index1}" @click="changeContent" > 
                <van-tab v-for="(item2,index2) in item1.blocks" :key="index2" :title="item2.name">
                </van-tab>
              </van-tabs> 
          </van-tab>      
        </van-tabs>
                      <div class="detailparent">
                        <!--  <cover class="detailitem" v-for="(item,index) in commendList" :key="index"  :detailitem="item"/> -->
                        <cover
                            class="detailitem"
                            :detailitem="categoryitem"
                            v-for="(categoryitem,categoryindex) in commendList"
                            :key="categoryindex"
                          />
                      </div>

      <!-- <div class="detailparent">
           <cover class="detailitem" v-for="(item,index) in commendList" :key="index"  :detailitem="item"/>
      </div> -->
  </div>
</template>

<script>
import http from "../assets/Utils/http"
import navBar from '../components/common/navBar.vue'
import cover from './cover'
import lunbo from '../components/common/lunbo'
import axios from 'axios' 
import { category } from '../api/config' 

import Vue from 'vue';
import { Tab, Tabs } from 'vant';

Vue.use(Tab);
Vue.use(Tabs);




export default {
   data(){
      return{
        commendList:null,
         category,
         navActive:0,
         navitem1:[]
      }
  },
  methods:{
       async changeContent1(title){
         console.log(title)
        let res = await http.get ('/proxyApi/x/web-interface/dynamic/region?rid='+this.category[title].rid+'&ps=20')
        this.commendList = res.data.archives 
         this.navitem1=this.category[title].blocks
         console.log(this.navitem1)
       },
       async changeContent(title){
        console.log(this.navitem1[title].rid)
        let res = await http.get ('/proxyApi/x/web-interface/dynamic/region?rid='+this.navitem1[title].rid+'&ps=20');
        console.log(res);
        this.commendList = res.data.archives 
      } ,
     
     
  },
    components:{
    navBar,
    cover,
    lunbo
  }, 
  async mounted(){
       let res = await http.get ('/proxyApi/x/web-interface/dynamic/region?rid=24&ps=20');
      this.commendList = res.data.archives
      
  }
}
</script>

<style lang='stylus' scoped>
.home
  height 177.867vw
  white-space pre-wrap
  overflow-y scroll
  .nav
    color #000
    .carouselBox
      height 29.733vw
      
    .navtwo
      display none
  .detailparent
    white-space pre-wrap
    display flex
    flex-wrap wrap
    justify-content space-around
    .detailitem
      margin 1.389vw 0
      width 45%

</style>