<template>
	<div class="HometeachersObj">
		<div class="allHometeachers"  @click="teachersdetails(HometeachersObj.id)">
		<div class="Hometeachersimg">
			<img :src="HometeachersObj.teachers_img" alt="">
		</div>
		<div class="teacherinfo2">
		<div class="blueline2"></div>
			<div class="teachers_name2">{{HometeachersObj.teachers_name}}</div>
			<div class="teachers_speaker2">{{HometeachersObj.teachers_speaker}}</div>
			
		</div>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["HometeachersObj"],
		methods:{
			teachersdetails(ev){
				console.log(ev)
				this.$router.push({path:"/Teachersdetails",query:{id:ev}})
			}
		}
		
		
		
	}
</script>

<style>
	.HometeachersObj{
		
		/* background-color: #3C7CFC; */
		margin-right: 25px;
		margin-top: 20px;
	}
	.allHometeachers{
		width: 390px;
		height: 344px;
		background: #fff;
		box-shadow: 0 2px 16px 0 rgba(47,51,56,.1);
		border-radius: 8px;
		margin-bottom: 20px;	
		cursor: pointer;
	}
	.allHometeachers:hover{
		margin-top: -10px;
		transition: 0.3s;
		/* border-radius: 8px; */
	}
	.Hometeachersimg{
		width: 390px;
		height: 244px;
		overflow: hidden;
		/* text-align: center; */
		
	}
	.Hometeachersimg img{
		border-radius: 8px 8px 0px 0px;
		width: 100%;
		/* height: 244px; */
		height: 370px;
		/* transform: scale(0.8); */
		/* height: 270px; */
		
		
	}
	
	.blueline2{
		width: 6px;
		height: 20px;
		background-color:#3C7CFC ;
		display: inline-block;
		float: left;
		border-radius: 6px;
		margin-right: 8px;
		margin-top: 2px;
	}
	.teacherinfo2{
		padding: 15px;
	}
	.teachers_name2{
		width: 256px;
		height: 26px;
		font-size: 18px;
	}
	.teachers_speaker2{
		width: 280px;
		height: 19px;
		font-size: 16px;
		color: #ccc;
		margin-top: 10px;
	}
</style>
