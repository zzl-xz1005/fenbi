<template>
	<div>
		
		<div class="Allteachers">
			<!-- 师资展示页 -->
		<!-- 	师资内部 -->
		<div class="teacherintroduce1"><div class="blueline2"></div><div>师资介绍</div></div>
			<Allteachers  v-for="(item,index) in allteachersarr" :key="index" :AllteachersObj="item"></Allteachers>
		</div>
	</div>
	
</template>

<script>
	export default {
		data(){return {
			allteachersarr:[]
		}},
		mounted(){
			// var url="http://localhost:7001/teachers"
			this.$axios.get(this.$routes.teachers).then((res)=>{
				// console.log(res)
				this.allteachersarr=res.data
			})
		},
		components:{
			Allteachers:()=>import("@/views/Teachers/Allteachers.vue")
		}
		
	}
</script>

<style>
	.teacherintroduce1{
		width: 1220px;
		height: 30px;
		/* background-color: gold; */
		margin-top:50px ;
		margin-bottom: 30px;
	}
	.teacherintroduce1 div{
		font-size: 25px;
		line-height: 30px;
	}
	.Allteachers{
		/* display: inline-block; */
		width: 1220px;
		/* text-align: left; */
		margin: 0 auto;
		/* background-color: antiquewhite; */
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
	}
	.blueline2{
		width: 4px;
		height: 30px;
		background-color:#3C7CFC ;
		display: inline-block;
		float: left;
		margin-right: 8px;
		margin-left: 21px;
		/* margin-top: 2px; */
	}
</style>
