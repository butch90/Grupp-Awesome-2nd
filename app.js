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
<<<<<<< HEAD
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
=======
    appRoot: m.path.normalize(__dirname +'/'),
    webRoot: 'www',
    classes: {
        Server: require("./classes/Server.class"),
        Mongo: require("./classes/Mongo.class"),
        Routing: require('./classes/Routing.class'),
        Login: require('./classes/Login.class')
    }
>>>>>>> 02c0699758de5f1e63330f7dd37096e490f680e6
};

// Connect to MongoDB
new g.classes.Mongo();

// Start server
new g.classes.Server();