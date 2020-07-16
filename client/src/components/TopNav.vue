<template>
	<div>
		<div class="blog">
			<div class="logo">
				<img src="../img/fenbilogo.png">
			</div>
			<div class="nav">
				<router-link to="/"><span class="top_nav_text ">首页</span><span class="nav_line1"></span></router-link>
				<router-link to="/Course"><span class="top_nav_text ">课程</span><span class="nav_line2"></span></router-link>
				<router-link to="/Questions"><span class="top_nav_text">题库</span><span class="nav_line3"></span></router-link>
				<router-link to="/Teachers"><span class="top_nav_text">师资</span><span class="nav_line4"></span></router-link>
				<router-link to="/Download"><span class="top_nav_text">下载</span><span class="nav_line5"></span></router-link>
			</div>

			<div class="login" @click="centerDialogVisible = true" v-show="isShow==1">登录</div>
			<!-- 头像 -->
			<div class="user" @click="user" v-show="isImg==1"><img :src="user_img" class="img"></div>
			<!-- 头像 -->
			<div class="user_kuang" v-show="isKuang">
				<div class="user_kuang1"><li class="el-icon-shopping-cart-2 "></li>&nbsp;&nbsp;&nbsp;我的订单</div>
				<div class="user_kuang1"><li class="el-icon-place"></li>&nbsp;&nbsp;&nbsp;收货地址</div>
				<div class="user_kuang1" @click="leave"><li class="el-icon-position "></li>&nbsp;&nbsp;&nbsp;退出登录</div>
			</div>
			
			<el-dialog :visible.sync="centerDialogVisible" :show-close="false" :destroy-on-close="true" width="30%" center
			 custom-class="login_kuang" >
				<span class="login_text">登录</span>
				<div class="kongbai1"></div>
				<el-input v-model="datas.user_name" placeholder="请输入用户名" clearable></el-input>
				<div class="kongbai2"></div>
				<el-input placeholder="请输入密码" v-model="datas.user_password" show-password></el-input>
				<span slot="footer" class="dialog-footer">
					<div  @click="login"class="regis_btn">登录</div>
				</span >
				<div slot="footer" class="dialog-footer ">立即注册</div>
			</el-dialog>

			<div class="regis" @click="dialogTableVisible = true" :destroy-on-close="true" :show-close="false" v-show="isShow==1">注册</div>
			
			<el-dialog  :visible.sync="dialogTableVisible" width="30%">
					<span class="login_text">注册</span>
					<div class="kongbai1"></div>
					<!-- 上传头像 -->
					<el-upload
					  class="upload-demo"
					  action="http://localhost:7001/uploadImg"
					  :show-file-list=showfilelist
					  :on-success="up_userImg"
					  >
						  <div class="user_img">
						  	<img :src="user_reimg" class="user_reimg">
						  </div>
					  
					</el-upload>
					
					<div class="kongbai1"></div>
					
					<el-form :model="valiForm" :rules="rules" ref="valiForm" >
						
						<el-form-item prop='name'>
					<el-input v-model="valiForm.name" placeholder="请输入用户名" clearable></el-input>
						</el-form-item>
					</el-form>	
					<div class="kongbai1"></div>
					
					<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" >
						
					  <el-form-item  prop="pass">
					    <el-input type="password" v-model="ruleForm.pass" placeholder="请输入密码" autocomplete="off"></el-input>
					  </el-form-item>
					  
					  <div class="kongbai1"></div>
					  
					  <el-form-item  prop="checkPass">
					    <el-input type="password" v-model="ruleForm.checkPass" placeholder="确认密码" autocomplete="off"></el-input>
					  </el-form-item>
					  
					</el-form>
					
					<div class="kongbai1"></div>
					<div class="verif_div">
						<el-input v-model="verif" placeholder="请输入验证码" clearable ></el-input>
					</div>
					<span class="verif_span" v-html="verif_img" @click="verif_span"></span>
					<div class="kongbai1"></div>
						<div type="primary" @click="register('ruleForm')" class="regis_btn">注册</div>
					<div class="now_login">已有账户？立即登录</div>
			</el-dialog>
			
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	import "../css/TopNav.css"
	import Teachers from "../views/Teachers.vue"
	export default {
		components: {
			Teachers
		},
		data() {
			var validatePass = (rule, value, callback) => {
			        if (value === '') {
			          callback(new Error('请输入密码'));
			        } else {
			          if (this.ruleForm.checkPass !== '') {
			            this.$refs.ruleForm.validateField('checkPass');
			          }
			          callback();
			        }
			      };
			      var validatePass2 = (rule, value, callback) => {
			        if (value === '') {
			          callback(new Error('请再次输入密码'));
			        } else if (value !== this.ruleForm.pass) {
			          callback(new Error('两次输入密码不一致!'));
			        } else {
			          callback();
			        }
			      };
			let nameRule1 = (rule, value, callback) => {
			      let regExp = '//';
			      if (regExp.test(value) === false) {
			           callback(new Error('不通过正则'));
			        } else {
			          callback();
			      }
			    };
			return {
				 ruleForm: {
				          pass: '',
				          checkPass: '',
				        },
				 valiForm: {
				          name: '',
						  password:''
				      },
				      rules: {
				          name: [
				            { required: true, message: '请输入名称', trigger: 'blur' },
				            { min: 5, max: 10, message: '长度在 5 到 10 个字符', trigger: 'blur' },
				            { validator: nameRule1, trigger: 'blur' }
				          ],
						   pass: [
						             { validator: validatePass, trigger: 'blur' }
						           ],
						           checkPass: [
						             { validator: validatePass2, trigger: 'blur' }
						           ]
				      },
				
				
				showfilelist:false,
				user_reimg:" ",
				verif:"",
				verif_img:"",
				verif_text:"",
				check_password:"",
				isImg:localStorage.getItem("isImg")||"2",
				isKuang:false,
				user_img:localStorage.getItem("user_img")||"",
				isShow:localStorage.getItem("isShow")||"1",
				datas:{user_password: "",user_name: ""},
				user_password: "",
				user_name: "",
				showCommentInput: false,
				name: "",
				activeName: 'first',
				visible: false,
				centerDialogVisible: false,
				  dialogTableVisible: false
			};
		},
		mounted() {
			this.verif_span()
		},
		methods: {
		
			up_userImg(response){
				this.user_reimg=response.src
			},
			verif_span(){
				this.$axios.post(this.$routes.verif,{withCredentials:true}).then((res)=>{
					this.verif_img=res.data.data
				})
			},
			register(formName) {
					this.$refs[formName].validate((valid) => {
					  if (valid) {
						alert('submit!');
						this.dialogTableVisible = false//登录成功后自动关闭登录框
					  } else {
						console.log('error submit!!');
						return false;
					  }
					});
				  },
			leave(){
				this.isKuang=!this.isKuang
				window.localStorage.setItem("isLogin","")
				window.localStorage.setItem("isShow","")
				window.localStorage.setItem("isImg","")
				window.localStorage.setItem("user_name","")
				window.localStorage.setItem("user_img","")
				window.location.reload()
			},
			user(){
				this.isKuang=!this.isKuang
			},
			login(){
				this.$axios.post(this.$routes.login,this.datas,{withCredentials:true}).then((res)=>{
					
					console.log(res.data)
					if(res.data.code==2001){
						//消息提示框
						this.$message({
						duration:1000,
						  message: res.data.info,
						  type: 'success'
						});
						window.localStorage.setItem("isLogin",true)
						window.localStorage.setItem("isShow","no")
						window.localStorage.setItem("isImg",1)
						window.localStorage.setItem("user_name",res.data.name)
						window.localStorage.setItem("user_img",res.data.user_img)
						
						this.isShow=window.localStorage.getItem("isShow")
						
						if(window.localStorage.getItem("isLogin")){
							this.centerDialogVisible = false//登录成功后自动关闭登录框
							this.datas.user_password=""
							this.datas.user_name=""
							window.location.reload()
						}
					
						// console.log(window.localStorage.getItem("user_name"))
					}else if(res.data.code==4001){
						this.$message({
						duration:2000,
						  message: res.data.info,
						  type: 'error'
						});
					}else if(res.data.code==4002){
						this.$message({
						duration:2000,
						  message: res.data.info,
						  type: 'error'
						});
					}else if(res.data.code==4003){
						this.$message({
						duration:2000,
						  message: res.data.info,
						  type: 'error'
						});
					}
					
				})
			},
			handleClick(tab, event) {
				// console.log(tab, event);
			}
		}
	}
</script>

<style>
	
	.user_reimg{
		display: inline-block;
		width: 75px;
		height: 75px;
		border-radius: 50%;
	}
	.user_img{
		width: 75px;
		height: 75px;
		border: 1px solid #DCDCDC;
		border-radius: 50%;
		margin-left: 170px;
		background-image: url(../img/头像.png);
		background-size: 100% 100%;
	}
	.verif_span{
		display: inline-block;
		position: absolute;
		margin-top: 0px;
		margin-left: 15px;
	}
	.verif_div{
		width: 280px;
		height: 40px;
		position: relative;
		display: inline-block;
	}
	.now_login{
		width: 150px;
		height: 30px;
		color: #3C7CFC;
		margin-top: 10px;
		margin-left: 140px;
	}
	.now_login:hover{
		cursor: pointer;
	}
	.regis_btn{
		margin-top: 10px;
		margin-left: 64px;
		width: 300px;
		height: 45px;
		font-size: 22px;
		font-weight: 700;
		color: white;
		text-align: center;
		line-height: 45px;
		border-radius: 20px;
		background-color:#409EFF ;
		
	}
	.regis_btn:hover{
		cursor: pointer;
	}
	.el-icon-position{
		font-size:30px;
	
	}
	.el-icon-place{
		font-size:30px;
	
	}
	.el-icon-shopping-cart-2{
		font-size:30px;
	
	}
	 .el-dropdown-link {
	    cursor: pointer;
	    color: #409EFF;
	  }
	  .el-icon-arrow-down {
	    font-size: 12px;
	  }
	  .user_kuang1{
		  border-bottom: 1px solid lightgray;
		  width: 100%;
		  height: 60px;
		  line-height: 60px;
		  text-align: center;
		  color: #DCDCDC;
	  }
	  .user_kuang1:hover{
		  cursor: pointer;	
		  color: #00E0E0;
		  display: inline-block;
	  }
	.user_kuang{
		border: 1px solid #DCDCDC;
		position: absolute;
		width: 120px;
		height: 183px;
		margin-top: 50px;
		margin-left: 1206px;
		display: flex;
		flex-wrap: wrap;
	}
	.user{
		position: absolute;
		width: 45px;
		height: 45px;
		margin-left: 1240px;
		margin-top: 3px;
	}
	
	.img{
		width: 43px;
		height: 43px;
		border-radius: 50%;
		display: inline-block;
		position: absolute;
		/* margin-top: 3px;
		margin-left: 1240px; */
	}
	.img:hover{
		cursor: pointer;
	}
</style>
