<template>
  <div id="app">
    <div class="nav-top">
        <!-- 引入公用的头部 header组件 -->
          <v-header></v-header>
    </div>
    <div class="banner">
    </div>
    <div class="contianer">
      <!-- 路由中的几个组件在这里被渲染，默认被渲染的为第一个组件，也就是home组件  -->
      <router-view></router-view>
    </div>
    <div class="footer">
      <!-- 引入公用的底部 footer组件 -->
      <v-footer></v-footer>
    </div>
  </div>
</template>
<script>
import header from './components/header.vue'
import footer from './components/footer.vue'
import './stylesheet/style.css'
export default{
  components: {
    'v-header': header,
    'v-footer': footer
  }
}
</script>
