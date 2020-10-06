// ES6 module
import Vue from 'vue'
import App from './App.vue'
import router from "./router/index"

// 屏蔽开发环境的提示
Vue.config.productionTip = false

// 引入全局样式
import './assets/reset.css'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
