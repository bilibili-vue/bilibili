<template>
  <div class="articleDetail">
    <nav-bar></nav-bar>
    <div class="detailinfo">
        <div class="video">
              <img  :src="model.pic"> 
              <iframe class="player-wrapper" :src="`https://player.bilibili.com/player.html?aid=${this.model.aid}&bvid=${this.model.bvid}&cid=${this.model.cid}&page=1` " scrolling="no" frameborder=20> </iframe>
        </div>
        <div class="detailinfoText">
            <div>
              <span>{{model.tname}}</span>
              <span>{{model.title}}</span>
            </div>
            <div>
              <span @click="pathPush">{{model.owner.name}}</span>
              <span>{{model.stat.view>10000?(model.stat.view/10000).toFixed(1)+"万":model.stat.view}}次观看</span>
              <span>{{model.stat.danmaku}}弹幕</span>
              <span>09-25</span>
            </div>
            <div>
              <p @click="collectionClick" :class="{activeColor:collectionActive}">
                <span class="icon-star-full" ></span>
                <span>收藏</span>
              </p>
              <p @click="subscriptClick" :class="{activeColor:subscritionActive}">
                <span class="icon-bubble"></span>
                <span>关注</span>
              </p>
              <p>
                <span class="icon-redo2"></span>
                <span>分享</span>
              </p>
            </div>
        </div>
        <div class="reli">
          <ul>
            <li>相关推荐</li>
            <li>评论{{model.stat.reply}}</li>
          </ul>
        </div>
        <div class="detailparent" @click="locationReload">
           <cover class="detailitem" v-for="(item,index) in commendList" :key="index"  :detailitem="item"/>
        </div>

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
        model:null,
        commendList:null,
        collectionActive:0,
        subscritionActive:0,
      }
  },
  components:{
    navBar,
    cover
  },
  methods:{
    async articleitemData(){
      console.log(this.$route.params.bvid)
       let res = await http.get ('/proxyApj/x/web-interface/view/detail?aid=&bvid='+this.$route.params.bvid);
       this.model = res.data.View;
       console.log(this.model);
       console.log(this.model.pic);
       this.commendData(this.model);
    },
      async commendData(model) {
        let res = await http.get ('/proxyApj/x/web-interface/archive/related?from=h5&aid='+this.model.aid+'&context=');
        this.commendList = res.data;
        console.log(this.commendList);
        },  
      async subscriptClick(){
        this.subscritionActive =!this.subscritionActive
      },
      async collectionClick(){
        this.collectionActive=!this.collectionActive
      },
      async locationReload(){
       window.location.reload() 
      },
      async pathPush(){
          if(this.$route.path != `/userInfo/${this.model.owner.mid}`) {
            this.$router.push(`/userInfo/${this.model.owner.mid}`)
        }
          
      },
  },
     
   async mounted(){
          this.articleitemData()  
      
   }
  
}
</script>

<style lang='stylus' scoped>
@import "../assets/stylus/border"
.articleDetail
  height 177.867vw
  white-space pre-wrap
  overflow-y scroll
  .detailinfo
    background-color #ffffff
    white-space pre-wrap
    overflow-y scroll
    .video
      width 100%
      height 2.11rem
      background #ccc
      position relative
      img 
        width 100%
        height 100%
      .player-wrapper
        position absolute
        top 0
        left 0
        width 100%
        height 100%
    .detailinfoText
      padding .15rem
      >div:nth-child(1)
        >span:nth-child(1)
          padding 0 .1rem
          color #FB7299 
          background-color #F4F4F4
          border-radius .12rem
      >div:nth-child(2)
        padding .1rem
        span 
          color #aaaaaa
          font-size .12rem
          margin-right .08rem
        >span:nth-child(1)
          color #000
          margin-right .18rem
      >div:nth-child(3)
        padding 0 .1rem
        display flex
        p
          margin-right 2.667vw
          display flex
          align-items center
          color #757575
          >span:nth-child(1)
            margin-right 0.8vw
            font-size 5.6vw
          >span:nth-child(2)
            font-size 3.467vw
        .activeColor
          color #fb7299
  .reli
    width 100%
    height 10.667vw
    border_1px(1px 0 0 0)
    margin-bottom 1.6vw
    ul  
      display flex
      justify-content space-around
      line-height 10.66vw
  .detailparent
    white-space pre-wrap
    display flex
    flex-wrap wrap
    justify-content space-around
    .detailitem
      margin 1.389vw 0
      width 45%
    
</style>