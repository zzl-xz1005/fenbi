const Service = require('egg').Service;
class TeachersService extends Service {
  async teachers(uid) {
    const sql=`select * from teachers`
    const TeachersData = await this.app.mysql.query(sql);
    return TeachersData;
  }
}
module.exports = TeachersService;