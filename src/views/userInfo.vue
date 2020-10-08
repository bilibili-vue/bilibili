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
        <space-footer style="display:none"></space-footer>
    </div>
</template>
<script>
import http from "../assets/Utils/http"
import navBar from "../components/common/navBar.vue"
import ShowInfo from "../components/userInfo/showInfo"
import InfoDetail from "../components/userInfo/infoDetail"
import SpaceFooter from "../components/userInfo/spaceFooter"
import ActiveList from "../components/userInfo/activeList"
import AlbumList from "../components/userInfo/albumList"

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
            console.log(this.vList);
        },
        async getPList(){
            let result = await http.get('vcApi/link_draw/v1/Doc/photo_list_ones?uid='+this.$route.params.mid)
            console.log(result);
            this.pList=result.data.items
            console.log(this.pList);
        },
        exchangeClick(){
            this.exchange=!this.exchange
        },

        
    },
}
</script>
<style lang="stylus" scoped>
@import"../assets/stylus/border"
@import"../assets/stylus/ellipsis"

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