<template>
	<div class="guanyufenbi">
		<div class="guanyufenbiitem">
		<div class="guanyufenbiitemimg">
			<img src="//nodestatic.fbstatic.cn/weblts_spa_online/page/assets/www/home/guanyufenbi-icon.svg" mode=""></img>
		</div>
		<div class="guanyufenbiitemtitle">
			关于粉笔
		</div>
	</div>
	<div class="guanyufenbicontent">
		
		<img src="http://nodestatic.fbstatic.cn/weblts_spa_online/page/assets/www/home/guanyufenbi-vedio.png" @click="myisplay" v-show="isimg"></img>
		<div v-show="isplay" @click="fenbiplay">
			
			<video width="384px" height="220px" autoplay="autoplay"  id="fenbiplay">
			  <source src="https://nodestatic.fbstatic.cn/video_qhd/english-reading/1586768249425.MP4" type="video/mp4">
			  
			</video>
		</div>
		<div class="qiyejieshao">
			<p class="qiyejieshaotitle">
				<span class="qiyejieshaotitle1">企业介绍</span>
				<span class="qiyejieshaorow">></span>
			</p>
			<p class="allqiyejiecontent">
			<p class="qiyejiecontent">北京粉笔蓝天科技有限公司（粉笔网）成立于2015年，目前已发展成为公务员考试在线培训行业领头羊。</p>
			<p class="qiyejiecontent">自品牌建立至今，已有超过3000万考生来到粉笔网，通过努力向理想靠近、改变人生轨迹，遇见了不一样的自己。</p>
			</p>
		</div>
		<div class="fugaiyewu">
			<p class="qiyejieshaotitle">
				<span class="qiyejieshaotitle1">覆盖业务</span>
				<!-- <span class="qiyejieshaorow">></span> -->
				
			</p>
			<p class="qiyejiecontentfugai">粉笔主营公务员考试，同时拓展有事业单位招聘、教师招聘、考研、财会、英语四六级、法考、建造、公开课等多个领域。</p>
			<p class="qiyejieshaotitle">
				<span class="qiyejieshaotitle1">粉笔分校</span>
				<span class="qiyejieshaorow">></span>
				<p class="qiyejiecontentfugai">粉笔已在多个省市开设分校，旨在为备考学员提供更优质、更有针对性的服务。</p>
			</p>
			
		</div>
	</div>
	</div>
</template>

<script>
	export default {
		data(){return {
			isimg:true,
			isplay:false
			// fenbiplay:true
		}},
		methods:{
			myisplay(){
				this.isplay=!this.isplay
				this.isimg=!this.isimg
			},
			
			fenbiplay(){
				var myVideo = document.getElementById("fenbiplay");
				if(myVideo.paused){
					myVideo.play();
				}
				else{
					myVideo.pause();
				}
				
				
				
			}
		}
	}
</script>

<style>
	.guanyufenbi{
		width: 1220px;
		margin: 0 auto;
		/* background-color: yellow; */
		margin-top: 25px;
	}
	.guanyufenbiitem{
		width: 1220px;
		margin: 0 auto;
		height: 66px;
		border-bottom: 1px solid #F6F6F6;
		
		}
		
	.guanyufenbiitemimg{
		height: 66px;
		float: left;
		
		line-height: 66px;
		margin-right: 10px;
	}
	.guanyufenbiitemimg img{
		width: 30px;
		height: 30px;
		
	}
	.guanyufenbiitemtitle{
		height: 66px;
		line-height: 50px;
		font-size: 24px;
		float: left;
	
	}
	.guanyufenbicontent{
		width: 100%;
		height: 250px;
		/* background-color:lightcoral; */
		display: flex;
		justify-content: space-between;
	}
	.guanyufenbicontent div,.guanyufenbicontent img{
		width: 384px;
		height: 220px;
		/* background-color:lemonchiffon ; */
		margin-top: 20px;
		
	}
	.guanyufenbicontent img{
		cursor: pointer;
	}
	.guanyufenbicontent video{
		cursor: pointer;
	}
	.qiyejieshaotitle{
		width: 100%;
		height: 50px;
		font-size: 20px;
		display: flex;
		justify-content: flex-start;
		/* background-color: red; */
	}
	.qiyejieshaotitle1{
		display: inline-block;
		width: 200px;
		height: 50px;
	/* background-color: yellow; */
		margin-right: 2px;
		
		
	}
	.qiyejieshaotitle .qiyejieshaorow{
		margin-right: 275px;
		width: 15px;
		height: 15px;
		color: #FFFFFF;
		background-color: blue;
		line-height: 15px;
		padding: 3px;
		border-radius: 100px;
		margin-top: 2px;
	}
	.qiyejiecontent,.qiyejiecontentfugai{
		    font-size: 14px;
		    color: #1b2126;
			letter-spacing: 0;
			line-height: 24px;
			margin-top: 0px;
			padding-bottom: 20px;
	}

	
</style>
