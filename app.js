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
        Mongo: require("./classes/Mongo.class")
    }
};

//Start server
new g.classes.Server();