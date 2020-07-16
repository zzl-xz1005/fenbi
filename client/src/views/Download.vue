<template>
	<div id="download">
		<div class="down-top">
			<div class="down-header">
				<router-link to="fenbi" class="down-fenbi">粉笔</router-link>
				<router-link to="pc" class="down-pcduan">粉笔pc端</router-link>
			</div>
		</div>
		<router-view></router-view>
	</div>

</template>

<script>
	export default {
		name: "Download",
		data() {
			return {

			}
		}
		// component: () => import('../views/Download/Fenbi.vue'),
		// component: () => import('../views/Download/Pc.vue')
	}
</script>

<style>
	* {
		border: 0;
		margin: 0;
		padding: 0;
	}

	.down-top {
		width: 100%;
		height: 100px;
		background-color: #f0f0f8;
	}
	.down-header {
		margin: 0 auto;
		width: 18%;
		height: 100%;
	}
	.down-fenbi,.down-pcduan{
		display: inline-block;
		text-align: center;
		color: #666;
		width: 100px;
		height: 64px;
		font-size: 24px;
		text-decoration: none;margin-top: 32px;
	}
	.down-pcduan{
		float: right;
	}
	.down-fenbi:hover{
		color: #409EFF;
	}
	.down-pcduan:hover{
		color: #409EFF;
	}
</style>
