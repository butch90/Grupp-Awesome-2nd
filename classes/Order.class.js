module.exports = class Order {

	constructor(express) {
		this.app = express;
		this.dataBase  = new g.classes.Mongo();
		this.model = this.dataBase.getModel('Order');

		this.router();
	}
	router() {
		var me = this;
		this.app.all(g.settings.Order.route, function(req, res) {
			if (!me[req.method]) {
				res.sendStatus(404);
				return;
			}
			me[req.method](req, res);
		});
	}

	POST(req, res) {

		var data = req.body || {};

		this.model.create(data, function(err, data) {
			if(err) {
				console.log(err.stack);
				res.json(err.stack);
			}
			res.json(data);
			
		});

	}
	GET(req, res) {

		var method = req.params.id ? 'findById' : 'find';
		var data = req.params.id ? req.params.id : {};
		this.model[method](data, function(err, data) {
			if(err) {
				res.json(err.stack);
			}
			res.json(data);
		})
	}

}