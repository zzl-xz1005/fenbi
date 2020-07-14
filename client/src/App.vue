<template>
  <div >
		<TopNav></TopNav>
		<!-- <Teachers></Teachers> -->
		<!-- <FootNav></FootNav> -->
		<router-view></router-view>
	</div>
</template>

<script>
	import TopNav from "./components/TopNav.vue"
	import FootNav from "./components/FootNav.vue"
	import Teachers from "./views/Teachers.vue"
	
	export default{
		components:{
			TopNav,
			FootNav,
			Teachers
		}
	}
</script>
<style>

</style>
