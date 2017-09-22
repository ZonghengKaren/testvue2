// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'  // 引入router路由

// 引入项目的四个模块组件
import introduce from './components/introduce'
import employment from './components/employment'
import consult from './components/consult'
import Hello from './components/Hello'

Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.use(Router) // 使用router

// 定义路由
var routes = [{
  path: '/',
  component: Hello
}, {
  path: '/introduce',
  component: introduce
}, {
  path: '/employment',
  component: employment
}, {
  path: '/consult',
  component: consult
}]

// 实例化路由
var vueRouter =new Router({
  routes
})

new Vue({
  el: '#app',
  router: vueRouter,
  template: '<App/>',
  components: { App }
})
