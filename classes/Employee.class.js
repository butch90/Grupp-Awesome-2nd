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
			res.header('X-Client-id', req.sessionID).header('X-username', req.session.xUsername);
			me[req.method](req, res);
		});
	}

	GET(req, res) {
		var me = this;
		console.log("GET")
		var orderRow = this.mongo.getModel('OrderRow');
		var order = this.mongo.getModel('Order');
		var method = req.params.id ? 'findById' : 'find';
		var data = req.params.id ? req.params.id : {};

		this.model[method](data, function(err, data) {
			if(err) {
				res.json(err.stack);
			}
			if(req.params.vehicles && req.params.id) {


				orderRow.find( { employees: data._id }, function(err, result) {

					if(err) {
						res.json(err.stack);
					}
					var resultArray = result.map(function(i){return i.id});

					order.find( {orderRows: { $in: resultArray }}, function(err, result) {
						res.json(result);
					});

				});
	
			}
			else {

				res.json(data);
			}
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

	DELETE(req, res) {
		console.log("DELETE")
		this.model.findByIdAndRemove(req.params.id, (err, result) => {
		    if(err) console.log("err", err.stack);
		    res.json("deleted");
  		});
	}
}