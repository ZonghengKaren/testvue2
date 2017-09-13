<template>
  <div class="header">
    <div class="header-wrapper">
      <div class="logo">
        <a href="/home">TEST</a>
      </div>
      <ul class="nav">
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="/introduce">公司介绍</router-link></li>
        <li><router-link to="/employment">招贤纳士</router-link></li>
        <li><router-link to="/consult">易点咨询</router-link></li>
      </ul> 
    </div> 
  </div>
</template>
<style>
.header{
  width:1200px;
  height:100px;
  margin:0 auto;
  color:#fff;
}
.header-wrapper{
  width:1200px;
  height:100px;
}
.logo{
  width:210px;
  height:100px;
  float:left;
}
.nav{
  width:700px;
  height:100px;
  font-size:15px;
  float:right;
}
.nav li{
  float:left;
  margin-right:30px;
  height:34px;
  line-height:34px;
  overflow:hidden;
  margin-top:34px;
}
.nav li:last-child{
  margin-right:0;
}
.nav a{
  display:inline-block;
  padding:0 13px;
  color:#fff;
  border-radius:15px;
}
.nav a.router-link-active{
  background:#c10514;
}
</style>