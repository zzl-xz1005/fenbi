<template>
	<div class="navtop">
	<!-- 顶部导航内部 -->
	<el-menu
	  :default-active="activeIndex2"
	  class="el-menu-demo"
	  mode="horizontal"
	  @select="handleSelect"
	  background-color="#545c64"
	  text-color="#fff"
	  active-text-color="#ffd04b">
	  <el-menu-item index="1">管理员请登录</el-menu-item>
	
	</el-menu>
	</div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
	.navtop{
		width: 100%;
	}
</style>
