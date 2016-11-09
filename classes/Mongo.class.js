module.exports = class Mongo {

	constructor(){

		// Use m.mongoose for connection

		this.connect();
	}

	connect(){
		
	}

	/*loadAllModels() {

		this.models.forEach((m) => {
			var mc = require('./'+m+'.class.js');
			this.modelInstances[m] = new mc(this);
		})
	}*/
}