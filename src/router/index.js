import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
// import V1 from '@/components/V1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
