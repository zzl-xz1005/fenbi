<template>
	<div class="div">
		<div class="kuang">
			<p class="title">修改地址</p>

			<div class="kongbai"></div>
			<div class="add_div"><span>收件人：</span></div>
			<div class="add_name">
				<el-input placeholder="请填写姓名" v-model="datas.name" clearable></el-input>
			</div>

			<div class="kongbai"></div>
			<div class="add_div"><span>收货地址：</span></div>
			<div class="add_area">
				<v-distpicker @province="onChangeProvince" @city="onChangeCity" @area="onChangeArea"></v-distpicker>
			</div>

			<div ></div>
			<div class="add_div"><span></span></div>
			<div class="add_name">
				<el-input :rows="2" placeholder="具体到街道门牌号,否则邮寄的证书无法准确按时送达,最多可达60字" v-model="datas.myarea" >
				</el-input>
			</div>
			
			<div class="kongbai"></div>
			<div class="add_div"><span>邮政编码：</span></div>
			<div class="add_name">
				<el-input  v-model="datas.add_code" clearable></el-input>
			</div>
			
			<div class="kongbai"></div>
			<div class="add_div"><span>联系电话：</span></div>
			<div class="add_name">
				<el-input  v-model="datas.phone" clearable></el-input>
			</div>
			
			<div class="kongbai"></div>
			<div class="kongbai"></div>
			<div class="saveBtn" @click="saveBtn">保存</div>
		</div>
		
		<div class="kongbai"><span class="maxadd">最多可存储10个地址</span></div>
		<div class="myaddress">
			<div class="area">所在地区</div>
			<div class="myadd">详细地址</div>
			<div class="name">收货人</div>
			<div class="phone">联系电话</div>
			<div class="handle">操作</div>
		</div>
		<div  v-for="(item,index) in addArr" :key="index" >
			<div class="myaddressitem">
				<div class="area1">{{item.allarea}}</div>
				<div class="myadd1">{{item.myarea}}</div>
				<div class="name1">{{item.name}}</div>
				<div class="phone1">{{item.phone}}</div>
				<div class="handle1">
					<span class="change" @click="change(index,item.id)">修改 </span>
					<span>|</span>
					<span class="dele" @click="dele(index,item.id)">&nbsp;&nbsp;&nbsp;删除</span>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
	import VDistpicker from 'v-distpicker'
	export default {
		data() {
			return {
				datas:{
					name:"",
					province: '',
					city: '',
					area: '',
					allarea:"",
					myarea:"",
					add_code:"",
					phone:"",
					id:0,
					index:0
				},
				changelogo:0,
				addArr:[]
			}
		},
		mounted() {
			this.$axios.post(this.$routes.address,{withCredentials: true}).then((res)=>{
				this.addArr=res.data
			})
			
		},
		methods: {
			//修改收货地址
			change(index,id){
				this.changelogo=1
				this.datas=this.addArr[index]
				this.datas.id=id
				this.datas.index=index
				console.log(this.datas.name)
			},
			//删除收货地址
			dele(index,id){
				this.addArr.splice(index,1)//这是在界面上删除
				// console.log(id,99999)
				this.$axios.post(this.$routes.addressdele,{id:id},{withCredentials: true}).then((res)=>{
					if(res.data.code==2005){
						this.$message({
							duration: 2000,
							message: res.data.info,
							type: 'success'
						});
					
					}else{
						this.$message({
							duration: 2000,
							message: res.data.info,
							type: 'error'
						});
					}
				})
			},
			//新增与修改收货地址
			saveBtn(){
				if(this.changelogo==1){
					console.log(this.datas.name,"姓名")
					console.log(this.datas,"修改后的数据")
					this.$axios.post(this.$routes.addresschange,{datas:this.datas,id:this.datas.id},{withCredentials: true}).then((res)=>{
						console.log(res,"修改后的数据返回")
						// 将修改成功后的数据继续放在该数组里面
						this.datas.allarea=this.datas.province+"-"+this.datas.city+"-"+this.datas.area
						this.addArr[this.datas.index]=this.datas
						if(res.data.code==2004){
							this.$message({
								duration: 2000,
								message: res.data.info,
								type: 'success'
							});	
							this.changelogo=0
						}else{
							this.$message({
								duration: 2000,
								message: res.data.info,
								type: 'error'
							});
							this.changelogo=0
						}
					})
				}else{
				if(this.addArr.length<=10){
					this.$axios.post(this.$routes.addressquery,this.datas,{withCredentials: true}).then((res)=>{
						if(res.data.code==2003){
							this.$message({
								duration: 2000,
								message: res.data.info,
								type: 'success'
							});		
							this.datas.allarea=this.datas.province+"-"+this.datas.city+"-"+this.datas.area
							this.addArr.unshift(this.datas)//新添加的地址显示在界面上
						}else{
							this.$message({
								duration: 2000,
								message: res.data.info,
								type: 'error'
							});
						}
					})
				}
				else{
					this.$message({
						duration: 2000,
						message: "最多只能存10个地址",
						type: 'error'
					});
				}
			}
				
			},
			onChangeProvince(a) {
				this.datas.province = a.value
			},
			onChangeCity(a) {
				this.datas.city = a.value
			},
			onChangeArea(a) {
				this.datas.area = a.value
			}
		},
		components: {
			VDistpicker
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
		width: 270px;
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
	}
	.name1{
		display: inline-block;
		width: 200px;
		height: 40px;
		text-align: center;
		line-height: 40px;
		color: #333333;
	}
	.myadd1{
		display: inline-block;
		width: 250px;
		height: 40px;
		text-align: center;
		line-height: 40px;
		color: #333333;
	}
	.area1{
		display: inline-block;
		width: 350px;
		height: 40px;
		text-align: center;
		line-height: 40px;
		color: #333333;
	}
	.handle{
		display: inline-block;
		width: 270px;
		height: 40px;
		font-weight: 700;
		text-align: center;
		line-height: 40px;
	}
	.phone{
		display: inline-block;
		width: 230px;
		height: 40px;
		font-weight: 700;
		text-align: center;
		line-height: 40px;
	}
	.name{
		display: inline-block;
		width: 200px;
		height: 40px;
		font-weight: 700;
		text-align: center;
		line-height: 40px;
	}
	.myadd{
		display: inline-block;
		width: 250px;
		height: 40px;
		font-weight: 700;
		text-align: center;
		line-height: 40px;
	}
	.area{
		display: inline-block;
		width: 350px;
		height: 40px;
		font-weight: 700;
		text-align: center;
		line-height: 40px;
	}
	.myaddressitem{
		width: 1300px;
		height: 40px;
		background-color: white;
		margin: 0 auto;
		border: 1px solid #DFDFDF;
		margin-top: -1px;
	}
	.myaddress{
		width: 1300px;
		height: 40px;
		background-color: #F6F6F6;
		margin: 0 auto;
		border: 1px solid #DFDFDF;
	}
	.saveBtn{
		width: 200px;
		height: 40px;
		background-color: lightblue;
		font-size: 20px;
		line-height: 40px;
		color: white;
		font-weight: 600;
		text-align: center;
		border-radius: 30px;
	}
	.saveBtn:hover{
		cursor: pointer;
	}
	.add_area{
		display: inline-block;
		width: 760px;
		height: 36px;
		margin-top: 10px;
	}
	.add_name {
		display: inline-block;
		width: 560px;
		height: 36px;
		margin-top: 10px;
	}

	.add_div {
		width: 100px;
		height: 36px;
		display: inline-block;
		text-align: center;
		line-height: 36px;
		/* margin-top: 10px; */
	}

	.kongbai {
		width: 1100px;
		height: 15px;
	}

	.kuang {
		width: 1280px;
		height: 420px;
		position: relative;
		margin-top: 10px;
		margin-left: 30px;
	}

	.title {
		font-size: 18px;
		color: #333333;
		font-family: Microsoft YaHei;
		width: 300px;
	}
	.div{
		position: relative;
	}
</style>
