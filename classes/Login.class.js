var loginUrl = g.settings;

module.exports = class Login {
	constructor(express){
		this.app = express;
		this.settings = loginUrl.Login;
		this.mongo = new g.classes.Mongo();
		this.model = this.mongo.getModel('Employee');

		this.loginSetup()
	}

	loginSetup() {
    var me = this;
		
		this.app.all(this.settings.route, (req, res) =>{
			if(!me[req.method]) {
				res.sendStatus(404);
				res.end();
				return;
			}
			me[req.method](req, res);
			});
  	}

		POST(req, res) {
		  	console.log("POST")
		  	var data = req.body || {};

		  	if(!data.firstname || !data.birthdate) {
		  		res.sendStatus(400);
		  		res.end();
		  		return;
  	}

  	this.model.findOne(data, (err, result) => {
  		if(!result){
  			console.log("error", err.stack);
  			res.json(true);
  		} 
  		req.session.isLoggedIn = result._id;
  		console.log(result._id);
  		res.json(true);
  		})
  	}

	  GET(req, res) {
	  	console.log("GET")
	  	res.json(!!req.session.isLoggedIn);
	  }

	  DELETE(req, res) {
	  	console.log("DELETE")
	  	delete req.session.isLoggedIn;

	  	res.json(true);
	  }

}