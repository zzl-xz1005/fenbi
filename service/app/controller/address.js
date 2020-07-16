'use strict';

const Controller = require('egg').Controller;
class AddressController extends Controller {
	async query() {
		const {
			ctx
		} = this;
		var that = this

		const res = await ctx.service.address.query();
		ctx.body = res
	};

	async add() {
		const {
			ctx
		} = this;
		var that = this
		var obj = ctx.request.body;
		const res = await ctx.service.address.add(obj);
		if (res.affectedRows != 0) {
			ctx.body = {
				code: 2003,
				info: "添加成功"
			};
		} else {
			ctx.body = {
				code: 4004,
				info: "添加失败"
			};
		}

	};
	
	
	async change() {
		const {
			ctx
		} = this;
		var that = this
		var obj = ctx.request.body;
		// console.log(obj.datas,"前端传的修改数据")
		const res = await ctx.service.address.change(obj.datas);
		if (res.affectedRows != 0) {
			ctx.body = {
				code: 2004,
				info: "修改成功"
			};
		} else {
			ctx.body = {
				code: 4005,
				info: "修改失败"
			};
		}
	
	};
	
	
	async delet() {
		const {
			ctx
		} = this;
		var that = this
		var obj = ctx.request.body;
		console.log(obj,"接收的id")
		const res = await ctx.service.address.delet(obj);
		if (res.affectedRows != 0) {
			ctx.body = {
				code: 2005,
				info: "删除成功"
			};
		} else {
			ctx.body = {
				code: 4006,
				info: "删除失败"
			};
		}
	
	};
	
	}
	module.exports = AddressController;
