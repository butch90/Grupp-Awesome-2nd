module.exports = class OrderRow {
	constructor(app) {
		this.app = app;

		this.orderRow = new g.classes.Mongo().getModel('OrderRow');

		console.log(this.orderRow);
		
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

			me[req.method](req, res);
		});
	}

	GET(req, res) {
		var me = this;

		console.log(req.params);

		this.orderRow[(req.params.id ? 'populate' : 'find')]((req.params.id ? req.params.id : {}),
		(err, result)=>{
			(err) && (()=>{me.error(err,res); return;});
			res.json(result);
		});

	}

	POST(req, res) {
		var me = this,
			model = new this.orderRow(req.body);

		model.save((err, result)=>{
			(err) && (()=>{me.error(err,res); return;});
			res.json(result);
		});
	}

	DELETE(req, res) {
		res.send('DELETE');
	}

	PUT(req, res) {
		this.orderRow.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err,result)=>{
			(err) && (()=>{me.error(err,res); return;});
			res.json(result);
		});
	}
}