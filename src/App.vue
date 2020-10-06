<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default{
  // mounted() {
  //   fetch('/proxyApi/x/web-interface/ranking/region?rid=24&day=7&context=')
  //     .then(response => response.json())
  //     .then(result => {
  //       console.log(result)
  //     })
  // }
}
</script>

<style lang="stylus">
#app
  height 100%
  background-color #f4f4f4
</style>
