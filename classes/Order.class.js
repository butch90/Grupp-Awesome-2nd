module.exports = class Order {

	constructor(express) {
		this.app = express;
		// this.DB  = new g.classes.DB();
		// this.model = this.DB.getModel('order');

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

		var body = req.body || {};
		res.json('Post');
	}

}