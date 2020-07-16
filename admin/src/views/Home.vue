<template>
  <div class="home">
   <router-link to="/Adminall">
   <div class="login_success">登录成功</div>
   </router-link>
  <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    // HelloWorld
  }
}
</script>
<style>
	.login_success{
		width: 100px;
		height: 30px;
		background-color: pink;
	}
</style>