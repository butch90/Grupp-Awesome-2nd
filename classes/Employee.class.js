var options = g.settings;

module.exports = class Employee {

	constructor (express) {
		this.mongo = new g.classes.Mongo();
		this.model = this.mongo.getModel('Employee');
		this.app = express;
		this.settings = options.Employee;
		this.employeeREST();
	}

	employeeREST(){

		var me = this;

		this.app.all(this.settings.route, (req, res) =>{
			if(!me[req.method]) {
				res.sendStatus(404);
				res.end();
				return;
			}
			me[req.method](/*model, params, */req, res);
		});
	}

	GET(/*model, params, */req, res) {

		/*var models = require('../schemas/Employee');*/
		this.model.find({}, function(err, result) {
    	var employeeMap = {};

	    result.forEach(function(user) {
	      employeeMap[user._id] = user;
	    });
	    console.log(result, employeeMap, "employeeMap");
	    res.send(employeeMap);  
	  });
	}

	POST(/*model, params, */req, res) {
		res.send("POST");
	}

	PUT(/*model, params, */req, res) {
		res.send("PUT");
	}

	DELETE(/*model, params, */req, res) {
		res.send("DELETE");
	}
}

