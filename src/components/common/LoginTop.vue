<template>
  <div>
      <div class="LoginTop">
          <div></div>
          <div>{{Text}}</div>
          <div></div>
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
    font-size 4.267vw
</style>