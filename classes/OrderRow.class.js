module.exports = class OrderRow {
	constructor(app) {
		this.app = app;

		console.log('This is Order Row!');

		this.dataBase  = new g.classes.Mongo();
		this.orderRow = this.dataBase.getModel('OrderRow');

		this.OrderREST();
	}
	OrderREST() {
		var me = this;
		this.app.all(g.settings.OrderRow.route, function(req, res) {
			if (!me[req.method]) {
				res.sendStatus(404);
				return;
			}

			me[req.method](req, res);
		});
	};
	GET (req, res) {
		var query = req.params.id ? 'findById' : 'find';
		var data = req.params.id ? req.params.id : {};

		this.orderRow[query](data, function(err, result) {
			if(err) {
				res.json(err);
			}
			res.json(result);
		});
	};
	POST(req, res) {

		this.orderRow.create(req.body, function(err, data) {
			if(err) {
				console.log(err.stack);
				res.json(err.stack);
			}
			res.json(data);
			
		});

	};
	PUT(req, res) {

		this.orderRow.findByIdAndUpdate(req.params.id, req.body, function(err, data) {
			if(err) {
				res.json(err.stack);
				console.log(err.stack);
			}
			res.json(req.body);
		});

	}
	DELETE(req, res) {

		this.orderRow.findByIdAndRemove(req.params.id, function(err, data) {
			if(err) {
				res.json(err.stack);
				console.log(err.stack);
			}
			res.json('Removed');
		});

	}

}