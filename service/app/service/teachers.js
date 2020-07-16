const Service = require('egg').Service;
class TeachersService extends Service {
  async teachers(searchdetails) {
    const sql=`select * from teachers order by id desc`
    const TeachersData = await this.app.mysql.query(sql);
    return TeachersData;
  }
  async teachersdetails(searchdetails) {
    // console.log(searchdetails)//得到{id：id值}
    const sql=`select * from teachers where id='${searchdetails.id}'`
    // const sql=`select * from teachers where title like '%${queryObj.mysearch}%' order by id desc`
    const TeachersdetailsData = await this.app.mysql.query(sql);
    return TeachersdetailsData;
  }
  
}
module.exports = TeachersService;