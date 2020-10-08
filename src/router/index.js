import Vue from 'vue'
import VueRouter from 'vue-router'

import register from '@/views/register.vue'
import login from '@/views/Login.vue'
import Home from '@/views/Home'

//  import articleDetail from "../views/articleDetail" 

Vue.use(VueRouter)
const routes = [
  
  {
    path:'/register',
    component:register
  },
  {
    path:'/login',
    component:login
  },
  {
    path:'/',
    component:Home
  },
  {
    path:'/article/:bvid',
    component:()=>import("../views/articleDetail")  //优化，异步加载路由，只有用到这个组建的时候才会加载它的js文件，在开头用import的话则会一起全部加载
  },
  {
    path:'/userInfo/:mid',
    component:()=>import("../views/userInfo"),
  }
]
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }



const router = new VueRouter({
    mode: 'hash',
    routes
  })
  
  export default router 
