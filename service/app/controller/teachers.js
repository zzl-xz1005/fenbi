'use strict';

const Controller = require('egg').Controller;

class TeachersController extends Controller {
  async teachers() {
    const { ctx } = this;
    //ctx.body = 'hi, egg';
    ctx.body = await this.ctx.service.teachers.teachers();
  }
}

module.exports =  TeachersController;
