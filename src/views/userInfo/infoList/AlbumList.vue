<template>
    <div class="album-list" style="">
        <a href="//www.bilibili.com/p/h5/60645976" target="_blank" class="album-item-space">
            <div class="cover">
                <img src="https://i0.hdslb.com/bfs/album/08887dbbff2fb9d4f2ee3b2011ccbc18dac60748.png@352w_352h_1c.png" alt="" class="bfs-img"> 
                <!---->
            </div> 
            <div class="info">
                <h3 class="title">閒著無聊色塊亂塗。雪梟不會畫，告辭是宵寶寶</h3> 
                <div class="state">
                    <span class="view">
                        <i class="iconfont icon_xinxi_yuedushu"></i>
                        <span>154</span>
                    </span> 
                    <span class="danmaku">
                        <i class="iconfont icon_xinxi_pinglunshu"></i>
                        <span>--</span>
                    </span>
                </div>
            </div>
        </a>
    </div>
</template>
<script>
export default {
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