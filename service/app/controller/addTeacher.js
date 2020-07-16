'use strict';
const Controller = require('egg').Controller;
class addTeacherController extends Controller {
  async addTeacher() {
    const { ctx } = this;

    var obj = this.ctx.request.body;
    var result = await this.ctx.service.addTeacher.addTeacher(obj);

    if (result.affectedRows != 0) {
        var resData={
            info:"添加成功",
            code:1
        }
        
        this.ctx.body=resData;
    }
   
  }
}
module.exports = addTeacherController;