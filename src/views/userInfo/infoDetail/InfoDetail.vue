<template>
    <div class="part2">
        <div class="base">
            <span class="name">Baka恶魔</span>
             <span class="gender">
                 <i class="iconfont icon-nan"></i> 
                 <!---->
            </span> 
            <span class="level">
                <i class="iconfont icon-ic_userlevel_" style="color: rgb(255, 0, 0);"></i>
            </span> 
            <span class="vip">年度大会员</span> 
            <!---->
            </div> 
            <div class="verify">
                <img src="//s1.hdslb.com/bfs/static/jinkela/mstation-h5/asserts/icon_Certification_official.png" class="official"> 
                <span class="spread">bilibili UP主认证：bilibili 知名动漫UP主</span> 
                <a class="spread-btn">收起</a>
            </div> 
            <div class="desc">
                <span class="content hasRole spread">努力做有趣的视频，成为大家的快乐源泉。粉丝崔更群839948695  私信有可能会漏看 见谅</span> 
                <!---->
            </div> 
            <div class="tags">
                <span>粉丝勋章</span> 
                <span>uid:11255948</span>
            </div> 
            <div class="clearfloat"></div>
        </div>
</template>
<script>
export default {
    props:['infoData'],
}
</script>
<style lang="stylus" scoped>
    .part2
            clear: both;
            padding: 3.2vw;
            .base
                .name
                    font-size: 4.8vw;
                    color: #212121;
                    max-width: 62.66667vw;
                    vertical-align: middle;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    display: inline-block;
                .gender
                    margin-left: 1.06667vw;
                    display: inline-block;
                    vertical-align: middle;
                    padding-top: 0.53333vw;
                    .ic_female
                        color: #fb7299;
                .level  
                    margin-left: 1.6vw;
                    vertical-align: middle;
                .vip
                    display: inline-block;
                    font-size: 3.73333vw;
                    color: #fefefe;
                    background: #fb7299;
                    width: 21.6vw;
                    height: 4.48vw;
                    line-height: 4.48vw;
                    text-align: center;
                    border-radius: 0.8vw;
                    margin-left: 1.6vw;
                    vertical-align: middle;
                    transform: scale(.71);
                    transform-origin: left;
                    margin-right: -6.66667vw;
            .verify
                margin-top: 2.13333vw;
                span    
                    font-size: 3.46667vw;
                    color: #505050;
                    line-height: 4.53333vw;
                    vertical-align: middle;
                    float: left;
                    width: 78.13333vw;
                    overflow: hidden;
                    text-overflow: ellipsis;
                img 
                    width: 4.8vw;
                    height: 4.8vw;
                    margin-right: 1.06667vw;
                    vertical-align: middle;
                    float: left;
                .spread
                    height: auto;
                    white-space: normal;
                .spread-btn
                    float: right;
                    font-size: 3.46667vw;
                    color: #1389bf;
            .desc 
                .content
                    margin-top: 2.13333vw;
                    font-size: 3.46667vw;
                    color: #999;
                    line-height: 4.53333vw;
                    width: 83.4666
                    overflow: hidden;
                    text-overflow: ellipsis;
                    float: left;
            .tags
                clear: both;
                margin-top: 1.86667vw;
                margin-bottom: -1.33333vw;
                span 
                    display: inline-block;
                    font-size: 3.73333vw;
                    padding: 0.53333vw 1.33333vw;
                    margin-right: -2.66667vw;
                    color: #505050;
                    background: #f4f4f4;
                    border-radius: 0.53333vw;
                    transform: scale(.71);
                    transform-origin: left;
            .clearfloat
                clear both
</style>