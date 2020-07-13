'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  router.post('/registered', controller.registered.regis);//注册路由
  router.post('/login', controller.login.login);//登录路由
  router.post('/verif', controller.verif.verif);//验证码路由
  router.get('/teachers', controller.teachers.teachers);

};
