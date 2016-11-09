var options = g.settings;

module.exports = class Employee {

	constructor (express) {
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
		res.send("GET");
		/*User.find({}, function(err, result) {
    	var userMap = {};

	    result.forEach(function(user) {
	      userMap[user._id] = user;
	    });

	    res.send(userMap);  
	  });*/
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

