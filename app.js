m = {};

[
  "express",
  "express-session",
  "compression",
  "path",
  "fs",
  "body-parser",
  "mongoose"
].forEach(function(x){
  m[x.replace(/\W/g,'')] = require(x);
});

var appRoot: m.path.normalize(__dirname +'/'),
g.settings = {
  Server: {
    port: 3000,
    webRoot: 'www',
    endpoint: '*',
  },
  appRoot : appRoot,
  
};

//Variabler
var Server = require("./classes/Server.class"),
		Mongo = require("./classes/Mongo.class");
//Start server
var startServer = new Server(Mongo);