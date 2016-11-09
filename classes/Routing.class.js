module.exports = class Routing {

	constructor(app){

		this.app = app;

		this.setup();
	}

	setup(){
		var me = this;

		this.app.all(this.settings.route, function(req, res) {

		});

		me[req.method](model, req.params, req.body, req, res);
    }

	DELETE(model, params, body, req, res) {
	    if (!params.modelID) { this.error({error: 'Missing ID!'}, res); return; }

		var me = this;
		model.findByIdAndRemove(params.modelID, function(err, result) {
			if (err) { me.error(err, res); return; }
			res.json(true); // respond with result
		});
	 }
}