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
			me[req.method](req, res);
		});
	}

	GET(req, res) {
		console.log("GET")
		this.model.find({}, function(err, result) {
    	var employeeMap = {};

	    result.forEach(function(user) {
	      employeeMap[user._id] = user;
	    });
	    /*console.log(result, employeeMap, "employeeMap");*/
	    res.send(employeeMap);  
	  });
	}

	POST(req, res) {
		console.log("POST")
		this.model.create(req.body, (err, result) => {
	    if(err) console.log("err", err.stack);
	    res.json(result);
	  });
	}

	PUT(req, res) {
		console.log("PUT")
		this.model.findByIdAndUpdate(req.params.id, req.body, (err, result) => {
			if(err) console.log("err", err.stack);
			res.json(result);
		});
	}

	DELETE(/*model, params, */req, res) {
		res.send("DELETE");
	}
}