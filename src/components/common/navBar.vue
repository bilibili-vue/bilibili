<template>
    <div class="navBar">
        <div>
            <img src="../../assets/logo.png" alt="" @click="$router.push('/')">
        </div>
        <div>
            
        </div>
        <div>
            <div> <van-icon name="search" class="iconNav" size=".22rem" color="#ccc"/></div>
            <img class="user-img" src="../../assets/default_img.jpg" alt="" @click="$router.push('/register')">
            <div class="rapp">下载app</div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { Icon } from 'vant';

Vue.use(Icon);
export default {

}
</script>

<style lang='stylus' scoped>
    .navBar
        height 11.73333vw
        display flex
        background-color white
        padding 0 .12rem 0 .18rem
        >div:nth-child(1)
            width .61rem
            display flex
            justify-content center
            text-align center
            img 
                height 100%
        >div:nth-child(2)
            flex 1
            display flex
        >div:nth-child(3)
            width 1.70rem
            display flex
            padding-top:.1rem
            justify-content space-between
            .iconNav
               
            .user-img
                width .24rem
                height .24rem
            .rapp
                width .82rem
                height .24rem
                background #fb7299
                color #ffffff
                border-radius .04rem
                text-align center
                line-height .24rem


                
</style>