<template>
	<div>
		<div class="blog">
			<div class="logo">
				<img src="https://nodestatic.fbstatic.cn/weblts_spa_online/page/assets/www/header/logo.png">
			</div>
			<div class="nav">
				<el-tabs class="el-tabs" v-model="activeName" @tab-click="handleClick">
					<!-- <el-tab-pane label="首页" name="first"></el-tab-pane>
					<el-tab-pane label="课程" name="second"></el-tab-pane>
					<el-tab-pane label="题库" name="third"></el-tab-pane>
					<el-tab-pane label="师资" name="fourth"></el-tab-pane>
					<el-tab-pane label="下载" name="five"></el-tab-pane> -->
					<router-link to="/">首页</router-link>
					<router-link to="/Course">课程</router-link>
					<router-link to="/Questions">题库</router-link>
					<router-link to="/Teachers">师资</router-link>
					<router-link to="/Download">下载</router-link>
				</el-tabs>
			</div>
			<component :is="name"></component>
			<div class="login" @click="centerDialogVisible = true">登录</div>
			<el-dialog :visible.sync="centerDialogVisible" width="30%" center>
				<span class="login_text">登录</span>
				<span>需要注意的是内容是默认不居中的</span>
				<span slot="footer" class="dialog-footer">
					<el-button type="primary" @click="centerDialogVisible = false">登录</el-button>
				</span>
			</el-dialog>

			<div class="regis">注册</div>

		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	import Teachers from "../views/Teachers.vue"
	export default {
		components: {
			Teachers
		},
		data() {

			return {
				name:"",
				activeName: 'first',
				visible: false,
				centerDialogVisible: false
			};
		},
		methods: {
			
			handleClick(tab, event) {
				// console.log(tab, event);
			}
		}
	};
</script>

<style>
	.login_text {
		color: red;
		font-size: 18px;

	}

	.login {
		position: absolute;
		margin-top: 13px;
		margin-left: 1247px;
		color: #628AFC;
	}

	.login:hover {
		cursor: pointer;
	}

	.regis {
		position: absolute;
		margin-top: 13px;
		margin-left: 1300px;
		color: #628AFC;
	}

	.regis:hover {
		cursor: pointer;
	}

	font {
		font-size: 18px;
	}

	.el-tabs__active-bar.is-top {
		height: 3px;
	}

	.blog {
		position: relative;
		width: 100%;
		height: 50px;
		box-shadow: 2px 2px 3px 3px #ccc;
		border-bottom: 1px solid gainsboro;
	}

	.nav {
		position: absolute;
		display: inline-block;
		width: 600px;
		height: 40px;
		margin-top: 0px;
		margin-left: 330px;
	}

	.el-tabs {
		width: 60%;
		margin-left: 0px;
		display: inline-block;
		font-weight: 800;
	}

	.logo {
		position: absolute;
		display: inline-block;
		width: 104px;
		height: 40px;
		margin-top: 0px;
		margin-left: 150px;
	}

	img {
		display: inline-block;
		width: 104px;
		height: 40px;
	}
</style>
