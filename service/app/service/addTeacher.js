const Service = require('egg').Service;
class addTeacherService extends Service {
  async addTeacher(paramsObj) {
      // 参数
    // form: {
    //     teachers_img: '',
    //     teachers_name: '',
    //     teachers_speaker: '',
    //     teachers_description: '',
    //     teachers_specialty: ''
    //   }
var sql = `insert into teachers (teachers_img,teachers_name,teachers_speaker,teachers_description,teachers_specialty) values ("${paramsObj.teachers_img}","${paramsObj.teachers_name}","${paramsObj.teachers_speaker}","${paramsObj.teachers_description}","${paramsObj.teachers_specialty}")`

   const data = await this.app.mysql.query(sql);
   return data;
   
  }
}
module.exports = addTeacherService;