<template>
	<div class="Allteachers">
		<!-- 师资展示页 -->
	<!-- 	师资内部 -->
		<Allteachers  v-for="(item,index) in allteachersarr" :key="index" :AllteachersObj="item"></Allteachers>
	</div>
</template>

<script>
	export default {
		name:"Teachers",
		data(){return {
			allteachersarr:[]
		}},
		mounted(){
			// var url="http://localhost:7001/teachers"
			this.$axios.get(this.$routes.teachers).then((res)=>{
				console.log(res)
				this.allteachersarr=res.data
			})
		},
		components:{
			Allteachers:()=>import("@/views/Teachers/Allteachers.vue")
		}
	}
</script>

<style>
	.Allteachers{
		/* display: inline-block; */
		width: 1220px;
		/* text-align: left; */
		margin: 0 auto;
		background-color: antiquewhite;
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
	}
</style>
