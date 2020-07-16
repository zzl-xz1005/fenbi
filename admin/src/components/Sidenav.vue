<template>
	<div class="sidenavinner">
		<!-- 侧边导航栏 -->
		<div class="sidenavinner_left">
			
			   <el-menu
			      default-active="1"
				   :default-openeds="openeds"
			      class="el-menu-vertical-demo sidenavinner_1"
			      @open="handleOpen"
			      @close="handleClose"
				  
			      background-color="#545c64"
			      text-color="#fff"
			      active-text-color="#ffd04b">
				  <!-- 管理用户start -->
			      <el-submenu index="1">
			        <template slot="title" :default-openeds="openeds">
			          <i class="el-icon-location"></i>
			          <span>用户管理</span>
			        </template>
			        <el-menu-item-group>
			          <!-- <template slot="title">分组一</template> -->
			          <!-- <router-link to="FenbiuserAdd" class="static" ><el-menu-item index="1-1"> -->
					  <!-- :class="isActive?'moren':'dianji'" -->
					  <!-- <span>新增</span></el-menu-item></router-link> -->
			          <router-link to="FenbiuserEdit"><el-menu-item index="1-2">删除|禁用</el-menu-item></router-link>
			        </el-menu-item-group>
			      </el-submenu>
				   <!-- 管理用户end -->
				  <!-- 课程管理start -->
				  <el-submenu index="2">
				    <template slot="title">
				      <i class="el-icon-location"></i>
				      <span>课程管理</span>
				    </template>
				    <el-menu-item-group>
				      <!-- <template slot="title">分组一</template> -->
				      <router-link to="CourseAdd"><el-menu-item index="2-1" >新增</el-menu-item></router-link>
				      <router-link to="CourseEdit"><el-menu-item index="2-2">删除|编辑</el-menu-item></router-link>
				    </el-menu-item-group>
				  </el-submenu>
				  <!-- 课程管理end -->
				  <!-- 师资管理start -->
				  <el-submenu index="3">
				    <template slot="title">
				      <i class="el-icon-location"></i>
				      <span>师资管理</span>
				    </template>
				    <el-menu-item-group>
				      <!-- <template slot="title">分组一</template> -->
				      <router-link to="TeachersAdd"><el-menu-item index="3-1">新增</el-menu-item></router-link>
				      <router-link to="TeachersEdit"><el-menu-item index="3-2">删除|编辑</el-menu-item></router-link>
				    </el-menu-item-group>
				  </el-submenu>
				  <!-- 师资管理end -->
			 
			    </el-menu>
			  </el-col>
			</el-row>
		</div>
		
		<div class="sidenavinner_right">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
  export default {
	  
	  data () {
	      return {
			
	        openeds: ['1'],
	        // uniqueOpened: false
	      }
},
    methods: {
      handleOpen(key, keyPath) {
        // console.log(key, keyPath,"开启的");
		if(key==1){
			this.openeds=['1']
		}
		if(key==2){
			this.openeds=['2']
		}
		if(key==3){
			this.openeds=['3']
		}
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath,"关闭的");
      }
	 
    }
  }
</script>

<style>
	.sidenavinner{
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: space-between;
	}
	.sidenavinner_left{
		width: 240px;
		height: 100vh;
		background-color: rgb(84, 92, 100);
	}
	.sidenavinner_1{
		width: 240px;
		height: 100vh;
		background-color: rgb(84, 92, 100);
	}
	.sidenavinner_right{
		width: 1090px;
		height: 100vh;
		border: 1px solid blue;
	}
	.moren{
		color: #FFD04B;
	}
	.dianji{
		color: white;
	}
</style>
