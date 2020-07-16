'use strict';

const Controller = require('egg').Controller;

class delTeacherController extends Controller {
	async delTeacher(){
		const {
			ctx
		} = this;
		console.log("delobj------start")
		var obj= this.ctx.request.body;
		
		console.log(obj)
		console.log("delobj------start")
		var result=await this.ctx.service.delTeacher.delTeacher(obj);
		console.log(result.affectedRows)
		
		if(result.affectedRows!=0){
			var resData={
				info:"删除成功",
				code:1
			}
			
			this.ctx.body=resData;
		}else{
			
			this.ctx.body={
				info:"删除失败",
				code:0
			}
		}
		
		
	}
}


module.exports = delTeacherController;
