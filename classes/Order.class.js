module.exports = class Order {

	constructor(express) {
		this.app = express;
		this.dataBase  = new g.classes.Mongo();
		this.order = this.dataBase.getModel('Order');

		var me = this;
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
		var me = this;
		/*var newInstance = new this.order(req.body);
		newInstance.save((err)=>{
			if(err){console.log("error", err.stack)};
		})*/
		
		this.order.create(req.body, function(err, data) {
			/*me.order.findOne(data).populate('Customer._id').exec(err, data) => {
				console.log(true);
			}*/
			if(err) {
				console.log(err.stack);
				res.json(err.stack);
				return;
			}
			
		});

	}
	GET(req, res) {
		var me = this;
		var query = req.params.id ? 'findById' : 'find';
		var data = req.params.id ? req.params.id : {};

		this.order[query](data, function(err, result) {
			if(err) {
				res.json(err.stack);
			}
			if(query == 'findById'){
				me.order.findOne({_id: result._id}).populate('customer').exec((err, result)=>{
						if(err){
							res.json(err.stack);
							return;
						}
					res.json(result);
				})
				return;
			}
			res.json(result)
		});
	}
	PUT(req, res) {

		this.order.findByIdAndUpdate(req.params.id, req.body, function(err, data) {
			if(err) {
				res.json(err.stack);
				console.log(err.stack);
			}
			res.json(req.body);
		});

	}
	DELETE(req, res) {

		this.order.findByIdAndRemove(req.params.id, function(err, data) {
			if(err) {
				res.json(err.stack);
				console.log(err.stack);
			}
			res.json('Removed');
		});

	}

}