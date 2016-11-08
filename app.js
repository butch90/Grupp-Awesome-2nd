m = {};

[
  "express",
  "path",
  "fs",
  "body-parser"
].forEach(function(x){
  m[x.replace(/\W/g,'')] = require(x);
});

g = {
  port: 3000,
  appRoot: m.path.normalize(__dirname +'/'),
  webRoot: 'www'
};

//Variabler
var Server = require("./classes/Server.class");

//Start server
var startServer = new Server();