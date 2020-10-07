<template>
    <div class="album-list" style="" v-if="!exchange">
        <a href="//www.bilibili.com/p/h5/60645976" target="_blank" class="album-item-space">
            <div class="cover">
                <img :src="plist.pictures[0].img_src" alt="" class="bfs-img"> 
                <!---->
            </div> 
            <div class="info">
                <h3 class="title">{{plist.description}}</h3> 
                <div class="state">
                    <span class="view">
                        <i class="iconfont icon-zhiboguankanshu"></i>
                        <span>{{plist.view}}万</span>
                    </span> 
                    <span class="danmaku">
                        <i class="iconfont icon-_ico_reply"></i>
                        <span>{{plist.comment}}</span>
                    </span>
                </div>
            </div>
        </a>
    </div>
</template>
<script>
export default {
    props:['exchange','plist']
}
</script>
<style lang="stylus" scoped>
.album-list
    padding: 0 3.2vw;
    .album-item-space 
        height: 27.73333vw;
        padding: 2.13333vw 0;
        box-sizing: border-box;
        display: block;
        .cover
            float: left;
            width: 23.46667vw;
            height: 23.46667vw;
            position: relative;
            img 
                width: 100%;
                height: 100%;
                border-radius: 1.06667vw;
        .info
            position: relative;
            margin-left: 26.66667vw;
            height: 23.46667vw;
            .title
                font-size: 3.46667vw;
                color: #999;
                line-height: 4.8vw;
                font-weight: 400;
                max-height: 9.6vw;
                overflow: hidden;
                word-break: break-all;
                text-overflow: ellipsis;
            .state
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                font-size: 2.66667vw;
                color: #999;
                line-height: 4.53333vw;
                height: 4.53333vw;
                span 
                    display: inline-block;
                i 
                    margin-right: 1.06667vw;
                    vertical-align: middle;
                .danmaku
                    margin-left: 5.33333vw;
</style>