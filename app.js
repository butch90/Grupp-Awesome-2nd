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

g = {
    port: 3000,
    appRoot: m.path.normalize(__dirname +'/'),
    webRoot: 'www',
    classes: {
        Server: require("./classes/Server.class"),
        Mongo: require("./classes/Mongo.class"),
        Routing: require('./classes/Routing.class'),
        Login: require('./classes/Login.class')
    }
};

// Connect to MongoDB
new g.classes.Mongo();

// Start server
new g.classes.Server();