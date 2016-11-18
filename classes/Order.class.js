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
			res.header('X-Client-id', req.sessionID).header('X-username', req.session.xUsername);
			me[req.method](req, res);
		});
	}

	
	POST(req, res) {
		var me = this;
		this.order.create(req.body, function(err, data) {
			/*me.order.findOne(data).populate('Customer._id').exec(err, data) => {
				console.log(true);
			}*/
			if(err) {
				console.log(err.stack);
				res.json(err.stack);
			}
			res.json(data);
		});
	}

	GET(req, res) {

		if(req.params.id === 'active' || req.params.id === 'pending' || req.params.id === 'done') {
			this.order.find({ status: req.params.id }, function(err, data) {
				if(err) {
					res.json(err);
				}
				res.json(data);
			});
		}
		else {

			var query = req.params.id ? 'findById' : 'find';
			var data = req.params.id ? req.params.id : {};

			var me = this;
			this.order[query](data, function(err, result) {
				if(err) {
					res.json(err.stack);
				}
				console.log(result);
				if(query == 'findById' && result){
					me.order.findOne({_id: result._id}).populate(['customer','orderRows']).lean().exec((err, result)=>{

						if(!result) {
							return;
						}
						result.totalHours = 0;
						(result.orderRows) && result.orderRows.forEach((x, index)=>{
							result.totalHours += x.hours;
						
							if(index+1 == result.orderRows.length){
								res.header('X-Client-id', req.sessionID).header('X-username', req.session.xUsername);
								res.json(result);
								console.log('totalHours:',result.totalHours)
							}
						});
						if(err){
							res.json(err.stack);
							return;
						}
					})
					return;
				}
				if(!err) {
					res.header('X-Client-id', req.sessionID).header('X-username', req.session.xUsername);
					res.json(result);
				}
			});
		}
	}

	PUT(req, res) {

		this.order.findByIdAndUpdate(req.params.id, {new: true} ,req.body, function(err, data) {
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