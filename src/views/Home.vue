<template>
  <div class="home">
      home
      <nav-bar></nav-bar> 
      <div class="detailparent">
           <cover class="detailitem" v-for="(item,index) in commendList" :key="index"  :detailitem="item"/>
      </div>
  </div>
</template>

<script>
import http from "../assets/Utils/http"
import navBar from '../components/common/navBar.vue'
import cover from './cover'
// import axios from 'axios' 


export default {
   data(){
      return{
        commendList:null,
      }
  },
    components:{
    navBar,
    cover
  }, 
  async mounted(){
     let res = await http.get('/proxyApj/x/web-interface/archive/related?from=h5&aid=797311705&context=')
        this.model = res.data[0]
        console.log(this.model)
        this.commendList = res.data
        console.log(this.commendList) 
  }
}
</script>

<style lang='stylus' scoped>
.home
  height 177.867vw
  white-space pre-wrap
  overflow-y scroll
 .detailparent
    white-space pre-wrap
    display flex
    flex-wrap wrap
    justify-content space-around
    .detailitem
      margin 1.389vw 0
      width 45%

</style>