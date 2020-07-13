'use strict';

const Controller = require('egg').Controller;

class UserloginController extends Controller {
  async login() {
    const { ctx } = this;
  	
  	var that=this
  	var obj=ctx.request.body;
    const res = await ctx.service.login.queryuser(obj.user_name);
  	if(res.length==0){
  		ctx.body={code:4001,info:"用户名不存在"}
  	}else{
		
		 if(res[0].user_type==1){
			ctx.body={code:4002,info:"该用户被禁用，请联系管理员解禁"}
			return ;
		}
		
  		if(res[0].user_password!=obj.user_password){
  			ctx.body={code:4003,info:"密码或用户名错误"}
  		}else{
  			this.ctx.session.user_name=obj.user_name
			console.log(this.ctx.session.user_name,11111111111)
  			ctx.body={code:2001,info:"登录成功",user_img:res[0].user_img,name:res[0].user_name}
  		}
  	}
  	
  	
  }
}

module.exports = UserloginController;
