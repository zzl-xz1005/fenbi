'use strict';

const Controller = require('egg').Controller;

class RegisteredController extends Controller {
  async regis() {
    const { ctx } = this;
	var obj=ctx.request.body;
	const res=await ctx.service.registered.queryuser(obj);
	if(res=="ok"){
		ctx.body = {code:2000,info:"注册成功"};
		
	}else{
		ctx.body = {code:4000,info:"该用户名已存在"};
	}
  }
}

module.exports = RegisteredController;
