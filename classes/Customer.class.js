var options = g.settings;

module.exports = class Customer {

	constructor (express) {
		this.mongo = new g.classes.Mongo();
		this.model = this.mongo.getModel('Customer');
		this.app = express;
		this.settings = options.Customer;
		this.customerREST();
	}

	customerREST(){

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
		var method = req.params.id ? 'findById' : 'find';
		var data = req.params.id ? req.params.id : {};
		this.model[method](data, function(err, data) {
			if(err) {
				res.json(err.stack);
			}
			res.json(data);
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
		this.model.findByIdAndRemove(req.params.id, req.body, (err, result) => {
    if(err) console.log("err", err.stack);
    res.json("deleted");
  });
	}
}