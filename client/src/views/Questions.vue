<template>
	<div id="course">
		<!-- 版心 -->
		<div class="course-content">
<<<<<<< HEAD
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
=======
			<div class="gongkao">
				<div class="gongkao-left">
					
					<div class="block">
						<span class="demonstration">公考笔试 · 行测</span>
						<el-cascader v-model="value" :options="options" :props="{ expandTrigger: 'hover' }" @change="handleChange"></el-cascader>
					</div>
				</div>
				<div class="gongkao-right">
					<img class="vip" src='../img/历史.png' >
					<el-popover placement="top-start" title="公务员行测会员卡" width="200" trigger="hover" content="打开粉笔APP">
						<el-button slot="reference"><img class="vip" src='../img/会员.png' ></el-button>
					</el-popover>
				</div>
				<div class="line"></div>
>>>>>>> 42b44b0dad33f7bf6890e6a2ed3b02ea7126b639
			</div>
		</div>
	</div>
</template>


<script>
	export default {
<<<<<<< HEAD
=======
		name:"Questions",
>>>>>>> 42b44b0dad33f7bf6890e6a2ed3b02ea7126b639
		data() {
			return {
				value: [],
				options: [{
<<<<<<< HEAD
					value: 'xingce',
					label: '公考笔试·行测',
				}, {
					value: 'shenlun',
					label: '公考笔试·申论',
				}, {
					value: 'shiyedanwei',
					label: '事业单位',
=======
					value: 'zhinan',
					label: '指南',
				}, {
					value: 'daohang',
					label: '导航',
				}, {
					value: 'zujian',
					label: '组件',
>>>>>>> 42b44b0dad33f7bf6890e6a2ed3b02ea7126b639

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
<<<<<<< HEAD
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
=======
	* {
		border: 0;
		margin: 0;
		padding: 0;
	}

	#course {
		width: 100%;
		background-color: #f5f7fa;
		height: 800px;
	}

	.course-content {
		margin: 0 auto;
		width: 78%;
		height: 500px;
		background-color: lightgray;
	}

	.gongkao {
		height: 38px;
		width: 96%;
		background-color: #00E0E0;
>>>>>>> 42b44b0dad33f7bf6890e6a2ed3b02ea7126b639
		margin: 0 auto;
	}

	.gongkao-left {
		display: inline-block;
<<<<<<< HEAD
		/* background-color: lightcoral; */
=======
		background-color: lightcoral;
>>>>>>> 42b44b0dad33f7bf6890e6a2ed3b02ea7126b639
		height: 100%;
		width: 16%;
		cursor: pointer;
	}
<<<<<<< HEAD

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
=======
	.gongkao-right{
		display: inline-block;
		float: right;
	}
	.vip{
		width: 18px;
		height: 18px;
	}
	/* 分割线 */
	.line{
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
=======
	}
	
>>>>>>> 42b44b0dad33f7bf6890e6a2ed3b02ea7126b639
</style>
