<template>
	<div class="details">
	<div >
	<div class="teacherintroduce"><div class="blueline2"></div><div>师资介绍</div></div>
		<div class="alonedetails" v-for="(item,index) in teachersdetailsarr" :key="index">
			<div class="alonedetails_left"><img :src="item.teachers_img" alt=""></div>
			
			<div class="alonedetails_right">
				<div class="alonedetails_right_item1" >
					<div class="item1_teachers_name">{{item.teachers_name}}</div>
					<div  class="item1_teachers_speaker">{{item.teachers_speaker}}</div>
				</div>
				<div  class="alonedetails_right_item2">
					{{item.teachers_description}}
				</div>
					<div  class="alonedetails_right_item3">
						{{item.teachers_specialty}}
					</div>
				
			</div>
		</div>
	</div>
	</div>
</template>

<script>
	export default {
		data(){return {
			teachersdetailsarr:[]
		}},
		mounted(){
			// var url="http://localhost:7001/teachersdetails"
			let detailId=this.$route.query
			// console.log("detailId******")
			// console.log(detailId.id)
			this.$axios.get(this.$routes.teachersdetails,{params:{id:detailId.id}}).then((res)=>{
				// console.log(res)
				this.teachersdetailsarr=res.data
			})
		}
		
	}
</script>

<style>
	.details{
		/* width: 500px; */
		height: 600px;
		/* background-color: #3C7CFC; */
	}
	.teacherintroduce{
		width: 1220px;
		height: 30px;
/* 		background-color: gold; */
		margin-top:50px ;
		margin-bottom: 30PX;
		margin-left: -20px;
	}
	.teacherintroduce div{
		font-size: 25px;
		line-height: 30px;
	}
	.blueline2{
		width: 4px;
		height: 30px;
		background-color:#3C7CFC ;
		float: left;
		margin-right: 8px;
	}
	.details{
		width: 1220px;
		margin: 0 auto;
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
	}
	.alonedetails{
		width: 100%;
		height: 340px;
		display: flex;
	}
	.alonedetails_left img{
		width: 300px;
		height: 450px;
	}
	.alonedetails_left {
		width: 300px;
		height: 323px;
		overflow: hidden;
		border-radius: 8px;
	}
	.alonedetails_right{
		width: 850px;
		margin-left: 70px;
	}
	.alonedetails_right_item1{
		width: 100%;
		height: 78px;
		border-bottom: 1px solid  #F6F6F6;
		margin-top: 5px;
	}
	.item1_teachers_name{
		font-size: 25px;
		color: #404040;
	}
	.item1_teachers_speaker{
		color: #888888;
		margin-top: 10px;
	}
	.alonedetails_right_item2{
		background-color: #F6F6F6;
		width: 95%;
		border-radius:30px 0px 30px 0px ;
		padding: 21px;
		line-height: 30px;
		color: #888888;
		font-size: 14px;
		margin-top: 28px;
	}
	.alonedetails_right_item3{
		margin-top: 35px;
		color: #404040;
		line-height:30px ;
	}
</style>
