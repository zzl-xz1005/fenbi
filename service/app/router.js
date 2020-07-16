'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/teachers', controller.teachers.teachers);
  router.get('/teachersdetails', controller.teachers.teachersdetails);
  router.post('/uploadImg', controller.upteacherimg.uploadImg);
  // router.post('/uploadImg', controller.fileUpload.uploadImg);
  router.post('/addTeacher', controller.addTeacher.addTeacher);
  router.post('/delTeacher', controller.delTeacher.delTeacher);
};
