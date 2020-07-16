<template>
	<div>
		<!-- 师资管理修改删除页 -->
		<div></div>
		<div class="shiziinner">
		<div class="myaddress">
			<div class="area">教师图片</div>
			<div class="myadd">教师姓名</div>
			<div class="name">主讲课程</div>
			<div class="phone">教师简介</div>
			<div class="handle">操作</div>
		</div>
		<div  v-for="(item,index) in teacherData" :key="index" >
			<div class="myaddressitem">
				<div class="area1"> <img :src="item.teachers_img"></img></div>
				<div class="myadd1">{{item.teachers_name}}</div>
				<div class="name1">{{item.teachers_speaker}}</div>
				<div class="phone1">{{item.teachers_description}}</div>
				<div class="handle1">
					<span class="change" @click="change(index,item.id)">修改 </span>
					<span>|</span>
					<span class="dele" @click="dele(index,item.id)">&nbsp;&nbsp;&nbsp;删除</span>
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
		teacherData: []
      }
    },
	mounted(){
		// var url="http://localhost:7001/teachers"
		this.$axios.get(this.$routes.teachers).then((res)=>{
			// console.log(res)
			this.teacherData=res.data
		})
		
	},
	methods:{
		dele(index,teacherId){
			this.$axios.post(this.$routes.delTeacher, {teacherId:teacherId}, {
			 	withCredentials: true
			 }).then((res)=>{
			 	console.log(res)
				// if(res.data.code==1){
				// 	this.$alert('亲，成功添加一条师资信息', '添加成功', {
				// 	         confirmButtonText: '确定',
				// 	       });
				// }
			})
		}
	}
  }
</script>

<style>
	.maxadd{
		display: inline-block;
		margin-top: -9px;
		margin-left: 106px;
		position: absolute;
		color: #333333;
	}
	.dele{
		color: #3C7CFC;
		font-size: 14px;
	}
	.dele:hover{
		cursor: pointer;
	}
	.change:hover{
		cursor: pointer;
	}
	.change{
		color: #3C7CFC;
		font-size: 14px;
	}
	.handle1{
		display: inline-block;
		width: 260px;
		height: 40px;
		text-align: center;
		line-height: 40px;
		color: #333333;
	}
	.phone1{
		display: inline-block;
		width: 230px;
		height: 40px;
		text-align: center;
		line-height: 40px;
		color: #333333;
		word-break:break-all;
		/* display:-webkit-box; */
		-webkit-line-clamp:1;
		-webkit-box-orient:vertical;
		overflow:hidden;
		/* border: 1px solid red; */
		

	}
	.name1{
		display: inline-block;
		width: 265px;
		/* height: 40px; */
		text-align: center;
		line-height: 40px;
		color: #333333;
	}
	.myadd1{
		display: inline-block;
		width: 80px;
		/* height: 40px; */
		text-align: center;
		line-height: 40px;
		color: #333333;
	}
	.area1{
		display: inline-block;
		width: 200px;
		/* height: 40px; */
		text-align: center;
		line-height: 40px;
		color: #333333;
	}
	.area1 img{
		width: 40px;
		height: 40px;
	}
	.handle{
		display: inline-block;
		width: 270px;
		/* height: 40px; */
		font-weight: 700;
		text-align: center;
		line-height: 40px;
	}
	.phone{
		display: inline-block;
		width: 230px;
		/* height: 40px; */
		font-weight: 700;
		text-align: center;
		line-height: 40px;
	}
	.name{
		display: inline-block;
		width: 265px;
		/* height: 40px; */
		font-weight: 700;
		text-align: center;
		line-height: 40px;
	}
	.myadd{
		display: inline-block;
		width: 80px;
		/* height: 40px; */
		font-weight: 700;
		text-align: center;
		line-height: 40px;
	}
	.area{
		display: inline-block;
		width: 200px;
		/* height: 40px; */
		font-weight: 700;
		text-align: center;
		line-height: 40px;
	}
	.myaddressitem{
		width: 1090px;
		/* height: 40px; */
		background-color: white;
		margin: 0 auto;
		border: 1px solid #DFDFDF;
		margin-top: -1px;
	}
	.myaddress{
		width: 1090px;
		/* height: 40px; */
		background-color: #F6F6F6;
		margin: 0 auto;
		border: 1px solid #DFDFDF;
	}
</style>
