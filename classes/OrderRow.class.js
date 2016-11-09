module.exports = class OrderRow {
	constructor(app) {
		this.app = app;
		
		this.router();
	}

	router() {
		var me = this;

		this.app.all('/bilverkstan/orderrow/:employee?', (req,res)=>{
			(!req.method) && (()=>{
				res.sendStatus(404);
				res.end();
				return;
			})
			console.log(req.method);

			var params = req.body || {};

			me[req.method](params, req, res);
		});
	}

	// 
	GET(params, req, res) {
		res.send('GET');
	}

	// 
	POST(params, req, res) {
		res.send('POST');
	}

	DELETE(params, req, res) {
		res.send('DELETE');
	}

	PUT(params, req, res) {
		res.send('PUT');
	}
}