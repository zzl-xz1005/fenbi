<template>
	<div id="course">
		<!-- 版心 -->
		<div class="course-content">
			<!-- 公考笔试 -->
			<div class="gongkao">
				<div class="gongkao-left">

					<div class="block">
						
						<!-- <span class="demonstration">公考笔试 · 行测</span> -->
						<el-cascader v-model="value" placeholder="公考笔试·行测" :options="options" :props="{ expandTrigger: 'hover' }" @change="handleChange"></el-cascader>
					</div>
				</div>
				<div class="gongkao-right">
				
					<div class="el-icon-time lishi"></div>
					
					<div>
						<div class="fontfamily fenbihuiyuan huiyuan"></div>
						<!-- <img src="../img/tiku/huiyuanerweima.png" class="huiyuanerweima"></img> -->
					</div>
					
				</div>
				<div style="clear: both;"></div>
				
				<div class="line"></div>
				
					
				<div class="guokao">
					<el-row>
						<el-button type="primary">国考</el-button>
					</el-row>
					<div class="tj-tiku">
						<p class="jiahao">+添加题库</p>
						<img class="" src="../img/tiku/tianjiatiku.png" alt="">
						
					</div>
				</div>
			</div>

			<!-- 快速练习 -->
			<div class="fast-lx">
				<div class="lx-content">
					<img src="../img/quick.png" alt="">
					<img src="../img/keypoint.png" alt="">
					<img src="../img/历年试卷.png" alt="">
					<img src="../img/random.png" alt="">
				</div>
			</div>
			
			<!-- 小模考 -->
			<div class="mokao">
				<div class="mokao-left">
					<div class="mokao-time">
						<h2>小模考</h2>
						<p>考试时间：7月14日 0:00-7月15日 0:00</p>
						<div class="mokao-jiexi">查看解析</div>
					</div>
					<div class="qizi">
						<img src="../img/mokao-tu1.png" alt="">
					</div>

				</div>
				<div class="mokao-right">
					<div class="mokao-dasai">
						<h2>模考大赛</h2>
						<p>把握考前实战机会，提前了解岗位竞争</p>
						<div class="mokao-jiexi">开始考试</div>
					</div>
					<div class="qizi">
						<img src="../img/mokao-tu2.png" alt="">
						
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


<script>
	export default {
		data() {
			return {
				value: [],
				options: [{
					value: 'xingce',
					label: '公考笔试·行测',
				}, {
					value: 'shenlun',
					label: '公考笔试·申论',
				}, {
					value: 'shiyedanwei',
					label: '事业单位',

				}, {
					value: 'jiaoshi',
					label: '教师',
					children: [{
						value: 'youer',
						label: '教师资格证-幼儿园'
					}, {
						value: 'xiaoxue',
						label: '教师资格证-小学'
					}, {
						value: 'zhongxue',
						label: '教师资格证-中学'
					}, {
						value: 'zhaopin',
						label: '教师招聘'
					}]
				}]
			};
		},
		methods: {
			handleChange(value) {
				console.log(value);
			}
		}
	};
</script>

<style>
	/* * {
		border: 0;
		margin: 0;
		padding: 0;
	} */


	#course {
		/* width: 1180px; */
		/* margin: 0 auto; */
		background-color: #f3f5f8;
		padding-top: 30px;
		
	}

	/* 版心 */
	.course-content {
		display: block;
		margin: 0 auto;
		width: 1180px;
		/* width: 100%; */
		padding-top: 20px;
		
		background-color: #FFF
		
	}
	.huiyuanerweima{
		width:280px ;
		height: 270px;
		margin-top: 22px;
		border-radius: 8px;
		margin-left: -220px;
		/* margin-left: 855px; */
		/* display: none; */
		/* float: right; */
		z-index:100;
	}
	
	/* 公考笔试 */
	.gongkao {
		/* height: 38px; */
		margin-top: 10px;
		width: 96%;
		/* background-color: #00E0E0; */
		margin: 0 auto;
	}

	.gongkao-left {
		display: inline-block;
		/* background-color: lightcoral; */
		height: 100%;
		width: 16%;
		cursor: pointer;
	}

	.gongkao-right {
		width: 100px;
		height: 30px;
		/* background-color: red; */
		display: flex;
		float: right;
		/* margin-top: 30px; */
		line-height: 30px;
	}

	

	/* 分割线 */
	.line {
		margin: 4px auto;
		width: 100%;
		height: 1px;
		background-color: #b3b3b3;
		margin-bottom: 20px;
		margin-top: 10px;
	}

	.lishi{
		margin-right: 20px;
		font-size:18px ;
		height: 30px;
		line-height:30px ;
	}
	.huiyuan{
		font-size:18px ;
		margin-right: 10px;
	}
	.guokao {
		/* height: 80px; */
		/* background-color: #00AAAA; */
	}

	.tj-tiku {
		position: absolute;
		margin-left: 100px;
		margin-top: -32px;
		cursor: pointer;
	}

	.tj-tiku img {
		width: 126px;
		height: 160px;
		border-radius: 8px;
		display: none;
	}

	.tj-tiku:hover img {
		display: block;
	}

	/* 快速练习 */
	.fast-lx {
		width: 96%;
		/* height: 350px; */
		margin: 0 auto;
		/* background-color: #81BCE9; */
		margin-top: 42px;
		border-radius: 8px;
	}
	
	.lx-content{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.lx-content img{
		width: 265px;
		height: 350px;
		cursor: pointer;
	}
	.lx-content img:hover{
		margin-top: -10px;
		transition: 0.2s;
		box-shadow: 5px 5px 3px 4px #b3b3b3; 
	}
	
	.mokao{
		margin-top: 32px;
		width: 96%;
		height: 300px;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.mokao-left,.mokao-right{
		/* border: 1px solid red; */
		background-color: #fff;
		width: 48.8%;
		height: 172px;
		display: inline-block;
		border-radius: 8px;
		box-shadow: 0 0 16px 0 rgba(60,70,79,.1);
	}
	.mokao-left:hover{
		margin-top: -10px;
		transition: 0.2s;
		box-shadow: 5px 5px 3px 4px #b3b3b3; 
	}
	.mokao-right:hover{
		margin-top: -10px;
		transition: 0.2s;
		box-shadow: 5px 5px 3px 4px #b3b3b3; 
	}
	.mokao-time,.mokao-dasai{
		display: inline-block;
		margin-top: 32px;
		/* border: 1px solid #008000; */
		width: 260px;
		height: 108px;
		font-size: 14px;
		line-height: 36px;
		margin-left: 8%;
	}
	.qizi{
		display: inline-block;
		float: right;
		/* border: 1px solid red; */
		margin-right: 10%;
	}
	.qizi img{
		width:150px ;
		height: 150px;
	}
</style>
