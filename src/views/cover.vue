<template>
  <div @click="pathPush" v-if="detailitem">
       <div class="detailItem">
          <div class="imgparent">
              <!--  <img src="../assets/logo.png"  alt="" style="width:100%;height:27.778vw;"> -->
               <img :src="detailitem.pic"  alt="" style="width:100%;height:27.778vw;">
              <div class="bottom">
                  <div class="icon-play2"><span class="video">{{detailitem.stat.view>10000?(detailitem.stat.view/10000).toFixed(1)+"万":detailitem.stat.view}}</span></div>
                  <div class="icon-file-text"> <span class="comment">{{detailitem.stat.danmaku>10000?(detailitem.stat.danmaku/10000).toFixed(1)+"万":detailitem.stat.danmaku}}</span> </div>
              </div>
          </div>
          <p>{{detailitem.title}}</p>
      </div>
  </div>
</template>

<script>
export default {
     props:['detailitem'],
     methods:{
         async pathPush(){
             if(this.$route.path != `/article/${this.detailitem.bvid}`) {
                this.$router.push(`/article/${this.detailitem.bvid}`)
                /* window.location.reload()   */
                /* history.go(0)  */
            }
             
         },
         
     }

}
</script>

<style lang='stylus' scoped>
    .detailItem
        p 
            font-size 3.2vw
            color #212121
            margin-top 1.6vw
            width 45.867vw
            display -webkit-box
            -webkit-box-orient vertical
            -webkit-line-clamp 2
            overflow hidden
        .imgparent
            position relative
            overflow-y scroll
            .bottom
                padding 0 2.778vw
                /* margin-bottom 1.389vw */
                position absolute
                bottom 0.556vw
                background linear-gradient(0deg,rgba(0,0,0,.85),transparent)
                justify-content space-between
                color white
                display flex
                left 0
                right 0
            
</style>