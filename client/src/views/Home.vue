<template>
	<div>

		<div class="home_items">
			<div class="home_items_lunbo">
				<!-- <span class="demonstration">Click 指示器触发</span> -->
				<el-carousel trigger="click" height="204px">
				  <el-carousel-item v-for="(item,index) in this.$store.state.Home.lunboimgsrc" :key="index">
					  <img :src="item" mode="" class="lunbo"></img>
				  </el-carousel-item>
				</el-carousel>
			</div>
			<div class="home_items_baomin">
				 <img :src="this.$store.state.Home.baomin" mode="" class="lunbo"></img>
			</div>
		</div>
		<!-- 试听课程 -->
		<div class="shiting">
			<div class="shitingline">
			<div class="shitingtitle">
				<img src="http://nodestatic.fbstatic.cn/weblts_spa_online/page/assets/www/home/shitingke-icon.svg"></img>
				试听课程
			</div>
			</div>
			<div class="shitingcontent">
				<div class="aloneshitingcontent" v-for="(item,index) in this.$store.state.Home.shiting" :key="index">
					<div class="classbgimgsrc" :style="{'backgroundImage':'url('+item.bgimgsrc+')','backgroundSize':'cover'}">
						<div class="playpart">
						<img :src="item.playimgsrc">
						<p>{{item.shitingclasstitle}}</p>
						</div>
					</div>
					<div class="shitingclass">{{item.shitingclass}}</div>
					<div class="classteacher">{{item.teacher}}</div>
				</div>
			</div>
		</div>
		
			<!-- 师资介绍 -->
		
		<div>	
			<div class="homeintoduceitem">
				<div class="homeintoduceitemimg">
					<img src="//nodestatic.fbstatic.cn/weblts_spa_online/page/assets/www/home/shizijieshao-icon.svg" mode=""></img>
				</div>
				<div class="homeintoduceitemtitle">
					师资介绍
				</div>
				<router-link to="/Teachers" class="hometeachermore_router"><div class="hometeachermore">更多>></div></router-link>
			</div>
		<div class="homeintoduce">
			
			<Hometeachers  v-for="(item,index) in hometeachersarr" :key="index" :HometeachersObj="item"></Hometeachers>
		</div>
		</div>
		<!-- 关于粉笔 -->
		<Guanyufenbi></Guanyufenbi>
		<!-- 企业报到 -->
		<Qiyebaodao></Qiyebaodao>
		<!-- 荣誉 -->
		<Rongyu></Rongyu>

	</div>
</template>

<script>

	
		export default {
			name:"Home",
			data(){return {
				hometeachersarr:[]
			}},
			mounted(){
				// var url="http://localhost:7001/teachers"
				this.$axios.get(this.$routes.teachers).then((res)=>{
					// console.log(res)
					this.hometeachersarr=res.data
				})
			},
			components:{
				Hometeachers:()=>import("@/views/Home/Hometeachers.vue"),
				Guanyufenbi:()=>import("@/views/Home/Guanyufenbi.vue"),
				Qiyebaodao:()=>import("@/views/Home/Qiyebaodao.vue"),
				Rongyu:()=>import("@/views/Home/Rongyu.vue")
			}
			
		}
	

</script>

<style>
		.home_items{
			width: 1220px;
			height: 204px;
			
			margin: 0 auto;
			display: flex;
			justify-content: space-between;
		}
		.home_items_lunbo,.home_items_lunbo img{
			width: 800px;
			height: 100%;
			
			border-radius: 6px;
		}
		
		.home_items_baomin,.home_items_baomin img{
			width: 380px;
			height: 100%;
		
			border-radius: 6px;
			
		}
		.shiting{
			width: 1220px;
			height: 324px;
			
			margin: 0 auto;
			margin-top: 20px;
		}
		.shitingline{
			width: 100%;
			border-bottom: 1px solid #F6F6F6;
		}
		.shitingtitle{
			width: 150px;
			height: 50px;
			display: flex;
			font-size: 24px;
		
		}
		.shitingtitle img{
			width: 26px;
			height: 26px;
			margin-right: 10px;
		}
		.shitingcontent{
			width: 100%;
			height: 197px;
			
			display: flex;
			justify-content: space-between;
			margin-top: 25px;
		}
		.aloneshitingcontent{
			width: 180px;
			height: 197px;
			
			border-radius: 8px;
			box-shadow: 0 3px 22px 0 rgba(47,51,56,.1);
			cursor: pointer;
		}
		.aloneshitingcontent:hover{
			margin-top: -10px;
			transition: 0.3s;
		}
		.classbgimgsrc{
			width: 180px;
			height: 80px;
			border-radius: 8px 8px 0px 0px;
			
		}
		.playpart{
			width: 130px;
			height: 30px;
			display: flex;
			line-height: 30px;
			margin-left: 10px;
			padding-top: 40px;
		}
		.playpart img{
			width: 30px;
			height: 30px;
			margin-right: 10px;
		}
		.playpart p{
			margin-top: 0px;
			color: #F6F6F6;
		}
		.shitingclass{
			width: 150px;
			height: 70px;
			margin: 0 auto;
			color: #111;
			font-size: 16px;
			margin-top: 10px;
		}
		.classteacher{
			width: 150px;
			margin: 0 auto;
			font-size: 14px;
			color: #8a9095;
		}
		.homeintoduce{
			width: 1220px;
			margin: 0 auto;
			display: flex;
			overflow: hidden;
			margin-top: 10px;
			/* background-color: #888888; */
		}
		.homeintoduceitem{
			width: 1220px;
			margin: 0 auto;
			height: 66px;
			border-bottom: 1px solid #F6F6F6;
			}
			
		.homeintoduceitemimg{
			height: 66px;
			float: left;
			
			line-height: 66px;
			margin-right: 10px;
		}
		.homeintoduceitemimg img{
			width: 30px;
			height: 30px;
		}
		.homeintoduceitemtitle{
			height: 66px;
			line-height: 50px;
			font-size: 24px;
			float: left;
			width: 1100px;
			/* margin-top: -4px; */
			/* margin-top: 10px; */
		}
		.hometeachermore{
			color: #3C7CFC;
			height: 66px;
			line-height: 50px;
			cursor: pointer;
			/* padding-top: 15px; */
		}
		.hometeachermore_router{
			text-decoration: none;
		}
</style>
