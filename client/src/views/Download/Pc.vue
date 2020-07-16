<template>
	<div id="pc">
		<div class="pc-content">
			<div class="pc-left">
				<img src="../../img/pctu.png" alt="">
			</div>
			<div class="pc-right">
				<div class="zhibo">
					<p>粉笔直播课允许用户在电脑端观看直播课、购买相应课程并使用模拟机考系统，使用方法如下：</p>
					<br>
					<p>1、在“我的课程”里点击想要观看的课程</p>
					<p>2、在“购买课程”里浏览和购买感兴趣的课程</p>
					<p>3、在“模拟机考”里可进行上机模拟考试训练</p>
				</div>
				<div class="xiazai">
					<template>
						<el-button type="text" @click="open">立即下载</el-button>
					</template>
				</div>
				<div class="banben">
					<p>版本： 4.0.0.1160   更新时间： 2020年07月13日</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Pc",
		data() {
			return {

			}
		},
		methods: {
			open() {
				this.$confirm('正在打开 setup_student_4.0.0.1160.exe, 是否继续?', '提示', {
					confirmButtonText: '保存文件',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$message({
						type: 'success',
						message: '下载成功!'
					});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消下载'
					});
				});
			}
		}
	}
</script>

<style>
	* {
		border: 0;
		margin: 0;
		padding: 0;
	}

	#pc {
		display: inline-block;
		margin: 0 auto;
		width: 100%;

	}

	.pc-content {
		width: 78%;
		height: 500px;
		margin: 0 auto;
		margin-top: 120px;
	}

	.pc-left {
		width: 59%;
		display: inline-block;

	}

	.pc-left img {
		width: 560px;
		height: 390px;
	}

	.pc-right {
		float: right;
		display: inline-block;
		width: 39%;
		height: 500px;
		font-size: 20px;
		color: #333;
		box-sizing: border-box;
	}
	.xiazai{
		margin-top: 68px;
		width: 200px;
		height: 50px;
		font-size: 22px;
	}
	.banben{
		font-size: 18px;
		color: #666;
		text-align: left;
		margin-top: 68px;
	}
</style>
