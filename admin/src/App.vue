<template>
  <div id="app">
    <div id="nav">
		<TopNav></TopNav>
      <router-link to="/"></router-link> 
     <!-- <router-link to="/about">About</router-link> -->
    </div>
    <router-view/>
  </div>
</template>
<script>
	
	import TopNav from "./components/TopNav.vue"
	
	
	export default{
		components:{
			TopNav,
			
		}
	}
</script>

<style>

</style>
