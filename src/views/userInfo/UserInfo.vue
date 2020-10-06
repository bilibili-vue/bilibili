<template>
    <div class="container">
        <nav-bar></nav-bar>
        <div class="content">
            <div class="banner">
            </div>
            <show-info></show-info>
            <info-detail></info-detail>
        </div>
        <info-tabs></info-tabs>
        <div class="list">
            <active-list style="display:none"></active-list>
            <album-list></album-list>
        </div>
        <div class="m-space-float-openapp">
            APP内打开
        </div>
        <space-footer style="display:none"></space-footer>
    </div>
</template>
<script>
import http from '../../../http.js'
import navBar from '@c/navBar.vue'
import ShowInfo from '@v/userInfo/showInfo/ShowInfo.vue'
import InfoDetail from '@v/userInfo/infoDetail/InfoDetail.vue'
import InfoTabs from '@v/userInfo/infoTabs/InfoTabs.vue'
import SpaceFooter from '@v/userInfo/spaceFooter/SpaceFooter.vue'
import ActiveList from '@v/userInfo/infoList/ActiveList.vue'
import AlbumList from '@v/userInfo/infoList/AlbumList'

export default {
    data(){
        return {
           infoData:{}
        }
    },
    components:{
        ShowInfo,
        InfoDetail,
        InfoTabs,
        SpaceFooter,
        ActiveList,
        AlbumList,
        navBar
    },
    async mounted(){
        let result=await http.get('/proxyApi/x/web-interface/nav');
        console.log(result);
    },
    methods:{}
}
</script>
<style lang="stylus" scoped>
@import '~@a/stylus/border.styl'
@import '~@a/stylus/ellipsis.styl'
.container
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
        
</style>