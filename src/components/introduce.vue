<template id="child-component2">
	<div class="introduce">
    <slider :pages="pages" :sliderinit="sliderinit"></slider>
    <div class="content">
          <p>公司介绍</p>
          <p>{{message}}</p>
          <button>Click Me</button>
    </div>
	</div>
</template>
<script type="text/javascript">
import slider from 'vue-concise-slider'
export default {
  name: 'introduce',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      message: 'Hello',
      pages:[
          {
            title: '',
            url: 'http://www.baidu.com/',
            style:{
             background:'red'
            }
          },
          {
           title: '',
           style:{
            background:'green'
            }
          },
          {
            title: 'slide3',
            style:{
              background:'#4bbfc3',
            },
          }
        ],
          //滑动配置[obj]
          sliderinit: {
            currentPage: 0,//当前页码
            thresholdDistance: 500,//滑动判定距离
            thresholdTime: 100,//滑动判定时间
            autoplay:5000,//自动滚动[ms]
            loop:false,//循环滚动
            direction:'horizontal',//方向设置，horizontal,vertical
            infinite:1,//无限滚动前后遍历数
            slidesToScroll:1,//每次滑动项数
          }
        }
      },
      components: {
          slider
      }
}
</script>