<template>
	<div class="allteachersObjBox">
		
			<div class="AllteachersObj" @click="teachersdetails(AllteachersObj.id)">
				<div><img :src="AllteachersObj.teachers_img" alt=""></div>
				
				<div class="teacherinfo">
				<div class="blueline"></div>
					<div class="teachers_name">{{AllteachersObj.teachers_name}}</div>
					<div class="teachers_speaker">{{AllteachersObj.teachers_speaker}}</div>
					<p class="teachers_description">{{AllteachersObj.teachers_description}}</p>
				</div>
				
			</div>
		
	</div>
	
</template>

<script>
	export default {
		props: ["AllteachersObj"],
		methods:{
			teachersdetails(ev){
				// console.log("点击详情")
				// console.log(ev)
				this.$router.push({path:"/Teachersdetails",query:{id:ev}})
			}
		}
		
		
	}
</script>

<style>
	.allteachersObjBox{
		/* width: 1220px; */
		/* height: 454px; */
		/* display: flex; */
		margin-left: 20px;
		}
	.AllteachersObj{
		width: 280px;
		height: 454px;
		background: #fff;
		box-shadow: 0 2px 16px 0 rgba(47,51,56,.1);
		border-radius: 8px;
		cursor: pointer;
		margin-bottom: 20px;	
		
	}
	.AllteachersObj:hover{
		margin-top: -10px;
		transition: 0.2s;
	}
	.AllteachersObj img{
		border-radius: 8px 8px 0px 0px;
		width: 100%;
		height: 280px;
	}
	
	.blueline{
		width: 6px;
		height: 20px;
		background-color:#3C7CFC ;
		display: inline-block;
		float: left;
		border-radius: 6px;
		margin-right: 8px;
		margin-top: 2px;
	}
	.teacherinfo{
		padding: 15px;
	}
	.teachers_name{
		width: 256px;
		height: 26px;
		font-size: 18px;
	}
	.teachers_speaker{
		width: 280px;
		height: 19px;
		font-size: 14px;
		color: #ccc;
	}
	.teachers_description{
		width: 260px;
		height: 60px;
		font-size: 14px;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow : hidden;
		text-overflow: ellipsis;
		margin-right: 15px;
	}
  
</style>
