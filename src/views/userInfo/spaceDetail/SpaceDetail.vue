<template>
    <div class="container">
        <div class="m-space-detail">
            <table class="info-card">
                <tr>
                    <td>头像</td> 
                    <td>
                        <img src="https://i0.hdslb.com/bfs/face/eb101ef90ebc4e9bf79f65312a22ebac84946700.jpg" class="bfs-img avatar">
                    </td>
                </tr> 
                <tr>
                    <td>昵称</td> 
                    <td></td>
                </tr> 
                <tr>
                    <td>UID</td> 
                    <td>325403584</td>
                </tr> 
                <tr>
                    <td>性别</td> 
                    <td></td>
                </tr> 
                <tr>
                    <td>出生日期</td> 
                    <td></td>
                </tr> 
                <tr>
                    <td>个性签名</td> 
                    <td></td>
                </tr>
            </table> 
            <div class="op-card">
                <a class="item">退出登录</a> 
                <a class="item" @click="returnClick">
                    返回空间
                    <router-view></router-view>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
    methods:{
        returnClick(){
            this.$router.push('/')
        }
    }
}
</script>
<style lang="stylus" scoped>
.container
    .m-space-detail
        position: fixed;
        top: 11.73333vw;
        left: 0;
        right: 0;
        bottom: 0;
        background: #f4f4f4;
        z-index: 99;
        .info-card
            margin-top: 3.2vw;
            width: 100%;
            background: #fff;
            border-collapse: collapse;
            font-size: 4vw;
            tr
                border-bottom: 1px solid #eee;
                td
                    padding: 2.66667vw 0;
                    img 
                        width: 12.26667vw;
                        height: 12.26667vw;
                        border-radius: 6.13333vw;
                        vertical-align: middle;
                td:first-child
                    padding-left: 3.2vw;
                    text-align: left;
                    color: #505050;
                    user-select: none;
                td:last-child
                    padding-right: 3.2vw;
                    text-align: right;
                    color: #999;
                    max-width: 48vw;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
        .op-card
            margin-top: 5.33333vw;
            .item
                display: block;
                padding: 2.66667vw;
                text-align: center;
                color: #505050;
                text-decoration: none;
                background: #fff;
                font-size: 3.73333vw;
                user-select: none;
            .item:first-child
                border-bottom: 1px solid #eee;
</style>