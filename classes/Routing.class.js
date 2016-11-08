module.exports = class Routing {

	constructor(app){

		this.modelInstances = {};

		this.app = app;

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