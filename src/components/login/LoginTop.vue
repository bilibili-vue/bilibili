<template>
  <div>
      <div class="LoginTop">
          <div></div>
          <div class="topText">{{Text}}</div>
          <div class="topRight">
            <slot name="right"></slot>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props:['Text']
}
</script>

<style lang='stylus' scoped>
.LoginTop
  height 12vw
  background-color white
  display flex
  div
    flex 1
    display flex
    justify-content center
    align-items center
  .topText
    font-size 4.267vw
  .topRight
    font-size 3.2vw
</style>