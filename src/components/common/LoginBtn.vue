<template>
  <div>
      <div class="LoginBtn">{{Btn}}</div>
  </div>
</template>

<script>
export default {
    props:['Btn']

}
</script>

<style lang='stylus' scoped>
.LoginBtn
  margin 4vw 2.667vw
  height 12vw
  background-color #ff9db5
  color white
  display flex
  justify-content center
  align-items center
  border-radius 1.8vw
  font-size 4.267vw
</style>