module.exports = class OrderRow {
	constructor(app) {
		this.app = app;
		this.orderRow = new g.classes.Mongo().getModel('OrderRow');
		
		this.router();
	}

	router() {
		var me = this;

		this.app.all('/bilverkstad/orderrow/:id?', (req,res)=>{
			(!req.method) && (()=>{
				res.sendStatus(404);
				res.end();
				return;
			});
			res.header('X-Client-id', req.sessionID).header('X-username', req.session.xUsername);
			me[req.method](req, res);
		});
	}

	GET(req, res) {
		var me = this;

		console.log(req.params);

		var test = this.orderRow.find((req.params.id ? {employees: req.params.id} : {}));
		
		(req.params.id) && test.populate([{path: 'employees'},{path: 'parts'}]);

		test.exec(function (err, result) {
			(err) && (()=>{me.ERROR(err,res); return;});

			//console.log(result);

			res.json(result);
		});
	}

	POST(req, res) {
		var me = this;
		new this.orderRow(req.body).save((err, result)=>{
			(err) && (()=>{me.ERROR(err,res); return;});
			res.json(result);
		});
	}

	DELETE(req, res) {
		if (!req.params.id) {this.ERROR({error:'Missing id'}, res); return};

		var me = this;
		this.orderRow.findByIdAndRemove(req.params.id, function(err, result) {
			(err) && (()=>{me.ERROR(err,res); return;});
			res.json(true);
		});
	}

	PUT(req, res) {
		this.orderRow.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err,result)=>{
			(err) && (()=>{me.ERROR(err,res); return;});
			res.json(result);
		});
	}

	ERROR(err,res) {
		res.status(400);
		res.json(err);
	}
}