<template>
    <div class="part1">
        <div class="face">
            <img src="//i2.hdslb.com/bfs/face/9457aff376cfed02b01a666d0e9eb010f6391180.jpg" class="bfs-img avatar"> 
            <!-- <img src="//s1.hdslb.com/bfs/static/jinkela/mstation-h5/asserts/icon_Certification_official.png" class="official"> -->
             <!----> <!---->
        </div> 
        <div class="relation">
            <div class="count">
                <span class="fans">
                    <span class="num">11.6万</span><br> 
                    <span class="type">粉丝</span>
                </span> 
                <span class="split"></span> 
                <span class="follow">
                    <span class="num">374</span><br> 
                    <span class="type">关注</span>
                </span> 
                <span class="split"></span> 
                <span class="likes">
                    <span class="num">116.9万</span><br> 
                    <span class="type">获赞</span>
                </span>
            </div> 
            <div class="follow-btn">
                <button class="red">
                    <i class="yo-ico">&#xe67e;</i> 关注
                </button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
    methods:{
        editClick(){
            this.$router.push('/spaceDetail')
        },
    },
    mounted(){
        // console.log(nfoData);
    }
}
</script>
<style lang="stylus" scoped>
.container
    .part1 
        padding 0 3.2vw;
        .face 
            float left
            position relative
            width 22.4vw
            height 22.4vw
            img     
                position absolute
                z-index 2
                width 22.4vw
                height 22.4vw
                border-radius 11.2vw
                margin-top -1.6vw
        .relation
            float right 
            width 58.66667vw
            padding-top 2.13333vw
            color #e7e7e7
            .count 
                >span 
                    width 19.2vw
                    display inline-block
                    text-align center
                    vertical-align middle
                .split
                    vertical-align middle
                    width 1px
                    height 4.26667vw
                    background #e7e7e7
                .num
                    font-size 3.73333vw
                    color #212121
                    line-height 4.26667vw
                .type  
                    font-size 2.93333vw
                    color #999
                
            .follow-btn
                button
                    width: 100%;
                    display: block;
                    height: 8vw;
                    border: none;
                    box-sizing: border-box;
                    border-radius: 1.06667vw;
                    font-size: 3.73333vw;
                    margin-top: 3.2vw;
                    outline: none;
                    line-height 8vw
                .red
                    background: #fb7299;
                    color: #fff;    
                

</style>