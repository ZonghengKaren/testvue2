<template>
	<div class="introduce">
		<p>公司介绍</p>
		<p>{{message}}</p>
		<button>Click Me</button>
	</div>
</template>
<script type="text/javascript">
	export default {
	  name: 'introduce',
	  data () {
	    return {
	      msg: 'Welcome to Your Vue.js App',
	      message: 'Hello'
	    }
	  }
	}
</script>