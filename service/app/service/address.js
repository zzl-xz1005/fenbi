  const Service = require('egg').Service;
  
  class AddressService extends Service {
    async query() {
  	 var addArr=await this.app.mysql.query(`select * from address order by id desc`);
  	 return addArr;
    }
	
	async add(obj) {
		let area=obj.province+"-"+obj.city+"-"+obj.area
		// console.log(area,"拼接的地址")
		var res = await this.app.mysql.query(
			`insert into address(allarea,myarea,name,add_code,phone) 
	    values ('${area}','${obj.myarea}','${obj.name}','${obj.code}','${obj.phone}')`
		);
		
		//查询的返回值都是数组  新增的返回值才有affectedRows
		return res
	
	};
	
	async change(obj) {
		
		let area=obj.province+"-"+obj.city+"-"+obj.area
		console.log("修改后拼接的地址",area)
		var res = await this.app.mysql.query(
			`update address set
				  allarea='${area}',myarea='${obj.myarea}',name='${obj.name}',add_code='${obj.add_code}',phone='${obj.phone}' where id=${obj.id}`
		);
		
		//查询的返回值都是数组  新增的返回值才有affectedRows
		return res
	
	};
	
	
	async delet(obj) {
		var res = await this.app.mysql.query(
			`delete from address where id=${obj.id}`
		);
		
		//查询的返回值都是数组  新增的返回值才有affectedRows
		return res
	
	};
	
  }
  
  module.exports = AddressService;