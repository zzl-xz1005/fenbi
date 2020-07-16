<template>
	<div>
		<!-- 师资管理新增页 -->
		<div class="teacheraddinner">
			
			
			<!-- 上传图片end -->
		<el-form ref="form" :model="form" label-width="80px">
			<!-- 上传图片start -->
			<el-form-item label="上传图片" id="upheight">
			  <!-- <div class="upteacherimg"> -->
			  	<el-upload
			  	  class="avatar-uploader"
			  	  action="http://localhost:7002/uploadImg"
			  	  :show-file-list="false"
			  	  :on-success="handleAvatarSuccess"
			  	  :before-upload="beforeAvatarUpload">
			  	  <img v-if="imageUrl" :src="imageUrl" class="avatar">
			  	  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
			  	</el-upload>
			  <!-- </div>	 -->
			</el-form-item>
			
		  <el-form-item label="图片链接">
		
			<el-input v-model="form.teachers_img" class="addteacherinput">{{form.teachers_img}}</el-input>
		  </el-form-item>
		  <el-form-item label="教师姓名">
		    <el-input v-model="form.teachers_name" class="addteacherinput"></el-input>
		  </el-form-item>
		  <el-form-item label="主讲课程">
		    <el-input v-model="form.teachers_speaker" class="addteacherinput"></el-input>
		  </el-form-item>
		  <el-form-item label="教师简介">
		      <el-input type="textarea" v-model="form.teachers_description" class="addteacherinput"></el-input>
		  </el-form-item>
		  <el-form-item label="教师专长">
		     <el-input type="textarea" v-model="form.teachers_specialty" class="addteacherinput"></el-input>
		   </el-form-item>
		  <el-form-item>
		    <el-button type="primary" @click="onSubmit">立即提交</el-button>
		    <el-button @click="addteacherCancel">取消</el-button>
		  </el-form-item>
		</el-form>
		</div>
	</div>
</template>

<script>
  export default {
    data(){
      return {
		imageUrl: '',
        form: {
          teachers_img: '',
          teachers_name: '',
          teachers_speaker: '',
          teachers_description: '',
          teachers_specialty: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
		console.log("*****")
		 console.log(this.form)
		 this.$axios.post(this.$routes.addTeacher, this.form, {
		 	withCredentials: true
		 }).then((res)=>{
		 	console.log(res)
			if(res.data.code==1){
				this.$alert('亲，成功添加一条师资信息', '添加成功', {
				         confirmButtonText: '确定',
				       });
			}
		})
      },
	   handleAvatarSuccess(res, file) {
		   // console.log("文件上传")
			// console.log( URL.createObjectURL(file.raw))
	          this.imageUrl = URL.createObjectURL(file.raw);
			  this.form.teachers_img=URL.createObjectURL(file.raw);
	        },
	  beforeAvatarUpload(file) {
	          const isJPG = file.type === 'image/jpeg';
	          const isLt2M = file.size / 1024 / 1024 < 2;
	  
	          if (!isJPG) {
	            this.$message.error('上传头像图片只能是 JPG 格式!');
	          }
	          if (!isLt2M) {
	            this.$message.error('上传头像图片大小不能超过 2MB!');
	          }
	          return isJPG && isLt2M;
	  },
	  addteacherCancel(){
		  this.form={}
	  }
    }
  }
</script>

<style>
	.avatar-uploader .el-upload {
	    border: 1px dashed #d9d9d9;
	    border-radius: 6px;
	    cursor: pointer;
	    position: relative;
	    overflow: hidden;
	  }
	  .avatar-uploader .el-upload:hover {
	    border-color: #409EFF;
	  }
	  .avatar-uploader-icon {
	    font-size: 28px;
	    color: #8c939d;
	    width: 178px;
	    height: 178px;
	    line-height: 178px;
	    text-align: center;
	  }
	  .avatar {
	    width: 178px;
	    height: 178px;
	    display: block;
	  }
	  .teacheraddinner{
		  margin-top: 40px;
	  }
	  .addteacherinput{
		  width: 600px;
	  }
	
	 
</style>
