'use strict';

const Controller = require('egg').Controller;

class TeachersController extends Controller {
  async teachers() {
    const { ctx } = this;
    //ctx.body = 'hi, egg';
    
    ctx.body = await this.ctx.service.teachers.teachers();
  }
  async teachersdetails() {
    const { ctx } = this;
    //ctx.body = 'hi, egg';
    var searchdetails=this.ctx.request.query
    ctx.body = await this.ctx.service.teachers.teachersdetails(searchdetails);
  }

}

module.exports =  TeachersController;
