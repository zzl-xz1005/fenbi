'use strict';

const Controller = require('egg').Controller;
var path=require("path");
var fs=require("fs");
class FileUploadController extends Controller {
  async uploadImg() {
    const { ctx } = this;
		const dest='/public/upload/';
		const file=ctx.request.files[0];
		
		let to = path.dirname(__dirname)+dest+path.basename(file.filepath);
		await fs.copyFileSync(file.filepath,to)
		fs.unlinkSync(file.filepath);
		let cluster = this.app.config.cluster.listen;
		ctx.body={
			code:0,
			masg:"",
			src:`http://localhost:${cluster.port}${dest}${path.basename(file.filepath)}`
		};
		
		
	}
}
	module.exports = FileUploadController;

