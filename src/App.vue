<template>
  <!-- <div class="container"> -->


    <!-- <article-detail></article-detail> -->
    <router-view></router-view>


  <!-- </div> -->
</template>

<script>
import articleDetail from './views/articleDetail'

export default {
  components: {
   /*  articleDetail */
  }
}
</script>

<style lang="stylus" scoped>
.container
  height 100%
</style>