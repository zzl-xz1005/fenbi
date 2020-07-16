const Service = require('egg').Service;

class delTeacherService extends Service {
 async delTeacher(delobj) {
     //参数teacherId
     console.log(delobj,3333333)
 var sql=`delete from teachers where id=${delobj.teacherId}`
 var obj=await this.app.mysql.query(sql);
 
 return obj;
 	
 }
}

module.exports =delTeacherService;