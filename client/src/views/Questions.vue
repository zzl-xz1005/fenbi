<template>
	<div id="course">
		<!-- 版心 -->
		<div class="course-content">
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
			</div>
		</div>
	</div>
</template>


<script>
	export default {
		name:"Questions",
		data() {
			return {
				value: [],
				options: [{
					value: 'zhinan',
					label: '指南',
				}, {
					value: 'daohang',
					label: '导航',
				}, {
					value: 'zujian',
					label: '组件',

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
		margin: 0 auto;
	}

	.gongkao-left {
		display: inline-block;
		background-color: lightcoral;
		height: 100%;
		width: 16%;
		cursor: pointer;
	}
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
	}
	
</style>
