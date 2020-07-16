'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  router.post('/registered', controller.registered.regis);//注册路由
  router.post('/login', controller.login.login);//登录路由
  router.post('/verif', controller.verif.verif);//验证码路由
  router.get('/teachers', controller.teachers.teachers);//师资模块路由
  router.post('/uploadImg', controller.fileUpload.uploadImg);//上传图片路由
  router.post('/address', controller.address.query);//查询收货地址路由
  router.post('/addressquery', controller.address.add);//添加收货地址路由
  router.post('/addresschange', controller.address.change);//修改收货地址路由
  router.post('/addressdele', controller.address.delet);//删除收货地址路由
};
