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
            <div class="rapp" @click="clickHandler">下载app</div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import { Icon } from 'vant';

Vue.use(Icon);
export default {
    methods:{
        clickHandler(){
            window.location.href='http://d.bilibili.com/download_app.html?preUrl=http%3A%2F%2Fm.bilibili.com%2Fvideo%2Fav796450032.html&schema=bilibili%3A%2F%2Fvideo%2F796450032%3Fpage%3D0&h5awaken=cHZpZD0wN0MxNjIyMi1BQ0IyLTRDQUEtOEZCMS1CMkYxRTQ3MjMzNDMxNTU4MTFpbmZvY183OTY0NTAwMzJfMTU5NTI0NTU5MDQ0NiZ1YT1Nb3ppbGxhJTJGNS4wJTIwKGlQaG9uZSUzQiUyMENQVSUyMGlQaG9uZSUyME9TJTIwMTFfMCUyMGxpa2UlMjBNYWMlMjBPUyUyMFgpJTIwQXBwbGVXZWJLaXQlMkY2MDQuMS4zOCUyMChLSFRNTCUyQyUyMGxpa2UlMjBHZWNrbyklMjBWZXJzaW9uJTJGMTEuMCUyME1vYmlsZSUyRjE1QTM3MiUyMFNhZmFyaSUyRjYwNC4xJmlzQXV0b09wZW49ZmFsc2UmYnNvdXJjZT1zZWFyY2hfc291Z28mJm9wZW5fYXBwX2Zyb21fdHlwZT1oNSZvcGVuX2FwcF91dWlkPUM5QTJBQjZBLUE4QUItNTNBNy01NTcxLURBMzVFRkUwMzZGNDEyMjk0aW5mb2Mmb3Blbl9hcHBfZ3JvdXBpZD0xJm9wZW5fYXBwX3VybD1odHRwcyUzQSUyRiUyRm0uYmlsaWJpbGkuY29tJTJGdmlkZW8lMkZCVjE3QzR5MWI3ZHkmb3Blbl9hcHBfYWRkaXRpb249JTdCJTIyc3BtaWQlMjIlM0ElMjIzMzMuNDAxLmNsaWNrLnBsYXllciUyMiUyQyUyMmdyb3VwX2lkJTIyJTNBMCU3RA%3D%3D'
        }
    }
}
</script>

<style lang='stylus' scoped>
    .navBar
        height 11.73333vw
        display flex
        background-color white
        padding 0 3.2vw 0 4.8vw
        >div:nth-child(1)
            width 16.267vw
            display flex
            justify-content center
            text-align center
            img 
                height 100%
        >div:nth-child(2)
            flex 1
            display flex
        >div:nth-child(3)
            width 45.333vw
            display flex
            padding-top:2.667vw
            justify-content space-between
            .iconNav
               
            .user-img
                width 6.4vw
                height 6.4vw
            .rapp
                width 21.867vw
                height 6.4vw
                background #fb7299
                color #ffffff
                border-radius 1.067vw
                text-align center
                line-height 6.4vw


                
</style>