module.exports = class Order {

	constructor(express) {
		this.app = express;
		this.dataBase  = new g.classes.Mongo();
		this.order = this.dataBase.getModel('Order');

		this.router();
	}
	router() {
		var me = this;
		this.app.all(g.settings.Order.route, function(req, res) {
			if (!me[req.method]) {
				res.sendStatus(404);
				return;
			}
			var data = req.body || {},
				params = req.params || {};
			me[req.method](req, res);
		});
	}

	POST(req, res, data) {


		this.order.create(data, function(err, data) {
			if(err) {
				console.log(err.stack);
				res.json(err.stack);
			}
			res.json(data);
			
		});

	}
	GET(req, res) {

		var query = req.params.id ? 'findById' : 'find';
		var data = req.params.id ? req.params.id : {};
		this.order[query](data, function(err, data) {
			if(err) {
				res.json(err.stack);
			}
			res.json(data);
		})
	}
	PUT(req, res) {
		var data = req.body;
		var query = req.params.id;
		this.order.findByIdAndUpdate(query, data, function(err, result) {
			if(err) {
				res.json(err.stack);
				console.log(err.stack);
			}
			res.json(data);
		});

	}
	DELETE(req, res) {
		var data = req.body;
		var query = req.params.id;
		this.order.findByIdAndRemove(query, data, function(err, result) {
			if(err) {
				res.json(err.stack);
				console.log(err.stack);
			}
			res.json('Removed');
		});

	}

}