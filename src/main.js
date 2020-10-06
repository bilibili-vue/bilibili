// ES6 module
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import http from '../http'
Vue.prototype.$http=http

// 屏蔽开发环境的提示
Vue.config.productionTip = false

import "./assets/reset.css"
import "./assets/iconfont/iconfont.css"

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
