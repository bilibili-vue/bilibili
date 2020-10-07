<template>
    <div class="container">
        <nav-bar></nav-bar>
        <div class="content">
            <div class="banner">
            </div>
            <show-info :followingData="followingData" :userInfo="userInfo"></show-info>
            <info-detail :userInfo="userInfo"></info-detail>
        </div>
        <div class="tabs">
            <span :class="{on:exchange}" @click="exchangeClick">视频</span>
            <span :class="{on:!exchange}" @click="exchangeClick">相簿</span>
        </div>
        <div class="list">
            <active-list v-for="(item,index) in vList" :key="index" :vlist="item" :exchange="exchange"></active-list>
            <album-list :exchange="exchange" v-for="(item,index) in pList" :key="index+new Date().getTime()" :plist="item"></album-list>
        </div>
        <div class="m-space-float-openapp">
            APP内打开
        </div>
        <space-footer style="display:none"></space-footer>
    </div>
</template>
<script>
import http from '@a/Utils/http.js'
import navBar from '@c/common/navBar.vue'
import ShowInfo from '@v/userInfo/showInfo/ShowInfo.vue'
import InfoDetail from '@v/userInfo/infoDetail/InfoDetail.vue'
import SpaceFooter from '@v/userInfo/spaceFooter/SpaceFooter.vue'
import ActiveList from '@v/userInfo/infoList/ActiveList.vue'
import AlbumList from '@v/userInfo/infoList/AlbumList'

export default {
    data(){
        return {
            followingData:{},
            userInfo:{},
            exchange:1,
            vList:[],
            pList:[]
        }
    },
    components:{
        ShowInfo,
        InfoDetail,
        SpaceFooter,
        ActiveList,
        AlbumList,
        navBar
    },
    mounted(){
        this.getFollowing()
        this.getInfo()
        this.getVList()
        this.getPList()
    },
    methods:{
        async getFollowing(){
            let result = await http.get('proxyApj/x/relation/stat?vmid='+this.$route.params.mid)
            this.followingData={
                ...result.data
            }
            this.followingData.follower=Number((this.followingData.follower/10000).toFixed(1))
            console.log(this.followingData);
        },
        async getInfo(){
            let result= await http.get('proxyApj/x/space/acc/info?mid='+this.$route.params.mid)
            console.log(result);
            this.userInfo={
                ...result.data,
            }
            this.userInfo.type=result.data.vip.type
            this.userInfo.title=result.data.official.title
            console.log(this.userInfo);
        },
        async getVList(){
            let result = await http.get('proxyApj/x/space/arc/search?pn=1&ps=100&order=click&keyword=&mid='+this.$route.params.mid)
            console.log(result);
            this.vList=result.data.list.vlist
            for(var i=0;i<this.vList.length;i++){
                this.vList[i].play=(this.vList[i].play/10000).toFixed(1)
                this.vList[i].video_review=(this.vList[i].video_review/10000).toFixed(1)
            }
            console.log(this.vList);
        },
        async getPList(){
            let result = await http.get('vcApi/link_draw/v1/Doc/photo_list_ones?uid='+this.$route.params.mid)
            console.log(result);
            this.pList=result.data.items
            for(var i=0;i<this.pList.length;i++){
                this.pList[i].view=(this.pList[i].view/10000).toFixed(1)
            }
            console.log(this.pList);
        },
        exchangeClick(){
            this.exchange=!this.exchange
        },

        
    },
}
</script>
<style lang="stylus" scoped>
@import '~@a/stylus/border.styl'
@import '~@a/stylus/ellipsis.styl'
.container
    overflow-y scroll
    height 100%
    .content 
        .banner
            width: 100vw;
            height: 24vw;
            overflow: hidden;
            background: url(//s1.hdslb.com/bfs/static/jinkela/mstation-h5/asserts/bannerTop_new.png);
            background-size: cover;
            background-position: 50%;
    .m-space-float-openapp
        position: fixed;
        bottom: 7.46667vw;
        z-index: 15;
        width: 32.26667vw;
        height: 10.13333vw;
        line-height: 10.13333vw;
        border-radius: 6.66667vw;
        left: 30.66667vw;
        background: #fb7299;
        color: #fff;
        text-align: center;
        font-size: 4vw;
    .tabs
        height: 10.66667vw;
        line-height: 10.66667vw;
        padding-left: 3.2vw;
        background: #fff;
        border-top: 1px solid #e7e7e7;
        border-bottom: 1px solid #e7e7e7;
        font-size: 0;
        span 
            display: inline-block;
            margin-right: 8.53333vw;
            color: #757575;
            font-size: 3.46667vw;
        .on
            color: #fb7299;
</style>