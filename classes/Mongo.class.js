module.exports = class Mongo {

	constructor(){

		this.mongo = require("mongoose");

		this.connect();
	}

	connect(){
		this.mongo.connect("mongodb://127.0.0.1:27017/Bilverkstaden", function(err, db) {
		  if(!err) {
		    console.log("Connected");
		  } else {
		  	console.log("error", err.stack)
		  }
		});
	}
}