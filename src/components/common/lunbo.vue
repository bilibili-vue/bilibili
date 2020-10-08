<template>
  <div class="lunbo">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem, Lazyload } from "vant";

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);

export default {
  data() {
    return {
      images: [
        "https://i0.hdslb.com/bfs/archive/0877cdd4b401b66d578841ad0cebbf1dec95fe07.jpg@480w_270h",
        "https://i0.hdslb.com/bfs/archive/1de7300e9793ee713c8e6515df9439378dd8c790.jpg@480w_270h",
        "https://i0.hdslb.com/bfs/archive/9e0ffb1650d9b68ae61bf02a18bf5892f9902890.jpg@480w_270h",
        "https://i0.hdslb.com/bfs/archive/68cb764e2a9060623f2678928588fd1d5b3aae75.png@480w_270h",
      ],
    };
  },
};
</script>

<style lang='stylus' scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 0.2rem;
  line-height: 0.5rem;
  text-align: center;
  background-color: #39a9ed;
}
</style>