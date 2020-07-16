  const Service = require('egg').Service;
  
  class LoginService extends Service {
    async queryuser(user_name) {
  	 var loginuser=await this.app.mysql.query(`select * from
  	 user where user_name="${user_name}"`);
  	 return loginuser;
  	
  
    }
  }
  
  module.exports = LoginService;