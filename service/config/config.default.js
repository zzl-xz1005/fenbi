/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1594542471853_7752';

  // add your middleware config here
  config.middleware = [];
  //配置数据库连接
  config.mysql={
	  client:{
		  host:"localhost",
		  port:"3306",
		  user:"root",
		  password:"root",
		  database:"fenbi"
	  }
  }
  //配置允许跨域和携带缓存
  config.cors={
    origin:"http://localhost:8080",
    // origin:"*",
	  credentials: true//后端会给去前端返回缓存数据包  告诉浏览器  去做缓存
  }
   //post安全设置 
    config.security={
  	  csrf:{
  		  enable:false,
  		  ignoreJSON:true
  	  }
    }
  //上传文件
  //配置文件
  	 config.multipart = {
  	    mode: 'file',
  	  };
	  
	//配置session缓存
	 config.session = {
	    key: 'session1',
	    maxAge: 1000*3600*24,
	    httpOnly: true,
	    encrypt: true
	  }
	  
  

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  
  

  return {
    ...config,
    ...userConfig,
  };
};
