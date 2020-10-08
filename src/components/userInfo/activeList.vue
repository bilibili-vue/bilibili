<template>
    <div>
        <div class="archive-list" v-if="exchange"> 
            <a :href="`/article/${this.vlist.bvid}`" class="video-item-space">
                <div class="cover">
                    <img :src="vlist.pic" :alt="vlist.title" class="bfs-img"> 
                    <span class="duration">{{vlist.length}}</span>
                </div> 
                <div class="info">
                    <h3 class="title">{{vlist.title}}</h3> 
                    <div class="state">
                        <span class="view">
                            <i class="iconfont icon-bofangshu"></i>
                            <span>{{vlist.play}}万</span>
                        </span> 
                        <span class="danmaku">
                            <i class="iconfont icon-danmushu"></i>
                            <span>{{vlist.video_review}}万</span>
                        </span>
                    </div>
                </div>
            </a>
            <empty></empty>
        </div> 
    </div>
</template>
<script>
import Empty from "./empty"
export default {
    props:['vlist','exchange'],
    components:{
        Empty
    }
}
</script>
<style lang="stylus" scoped>
.list
    .ending
        text-align: center;
        font-size: 13px;
        line-height: 40px;
        background: #f4f4f4;
        color: #757575;
    .archive-list
        padding-left: 3.2vw;
        background: #fff;
        .video-item-space
            height: 24.26667vw;
            box-sizing: border-box;
            border-bottom: 1px solid #ccc;
            display: block;
            padding: 2.4vw 3.2vw 2.4vw 0;
            .cover
                float: left;
                width: 31.2vw;
                height: 19.46667vw;
                position: relative;
                img 
                    width: 100%;
                    height: 100%;
                    border-radius: 1.06667vw;
                .duration   
                    position: absolute;
                    right: 1.06667vw;
                    bottom: 1.06667vw;
                    font-size: 3.2vw;
                    padding: 0 0.53333vw;
                    color: #fff;
                    border-radius: 0.53333vw;
                    background: rgba(0,0,0,.5);
            .info
                position: relative;
                margin-left: 34.4vw;
                height: 19.46667vw;
                .title
                    font-size: 3.73333vw;
                    color: #212121;
                    line-height: 4.53333vw;
                    font-weight: 400;
                    max-height: 9.06667vw;
                    overflow: hidden;
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
                    >span 
                        display inline-block 
                    span 
                        vertical-align: middle;
                    i 
                        margin-right: 1.06667vw;
                        vertical-align: middle;
                    .danmaku
                        margin-left: 7.73333vw;
                
        .empty-arc
            padding: 22.66667vw 0 4.26667vw;
            text-align: center; 
            img 
                width: 74.66667vw;
                margin-bottom: 4vw;
            p
                font-size: 4.26667vw;
                color: #999;
                line-height: 5.33333vw;
                a
                    color: #fb7299;
</style>