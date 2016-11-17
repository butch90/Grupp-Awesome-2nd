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
			res.header('X-Client-id', req.sessionID).header('X-username', req.session.xUsername);
			me[req.method](req, res);
		});
	}

	GET(req, res) {
		var me = this;
		console.log("GET")
		var method = req.params.id ? 'findById' : 'find';
		var data = req.params.id ? req.params.id : {};
		var order = this.mongo.getModel('Customer');
		this.model[method](data, function(err, data) {
			if(err) {
				res.json(err.stack);
			}
			if(req.params.vehicles) {
				order.find( {'customer': { $in: [req.params.id] }}, function(err, result) {
				res.json(result);

				console.log(result);

				return;		
					// result.forEach( function(data, index) {
					// 	order.find( { orderRows: result[index]._id }, function(err, r) {

					// 		// res.json({ 'employee vehicle history' : r });
					// 		response.push(r);
					// 		console.log('rseult', r);

					// 		(index+1 == result.length) && callback(response);

					// 	});
					// });
					// console.log(response);

					// function callback(response){
					// 	res.json(response);
					// }
				});
				return;
			}
			if(method === 'findById') {
				me.model.findOne({_id: data._id}).populate('orders').exec((err, result) => {
					if(err) {
						res.json(err);
					}
					res.json(result);
					return;
				});
				return;
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