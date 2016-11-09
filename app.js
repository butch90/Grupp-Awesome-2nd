m = {};

[

    "express",
    "express-session",
    "compression",
    "path",
    "fs",
    "body-parser",
    "cookie-parser",
    "mongoose"

].forEach(function(x){
    m[x.replace(/\W/g,'')] = require(x);
});

var appRoot = m.path.normalize(__dirname +'/');

g.settings = {
  appRoot: appRoot,
  Server: {
    port: 3000,
    endpoint: '*',
    webRoot: 'www'
  },
  classes: {
    Server: require("./classes/Server.class"),
    Mongo: require("./classes/Mongo.class")
  },
  Login: {
    route: '/rest/login'
  }
};

//Start server
new g.classes.Server();