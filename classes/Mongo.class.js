module.exports = class Mongo {

	constructor(app){

		this.modelInstances = {};

		this.app = app;

		this.mongo = m.Mongo;

		this.setup();
	}

	setup(){
		
	}

	/*loadAllModels() {

		this.models.forEach((m) => {
			var mc = require('./'+m+'.class.js');
			this.modelInstances[m] = new mc(this);
		})
	}*/
}