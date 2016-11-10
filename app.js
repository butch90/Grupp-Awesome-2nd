m = {};
g = {};

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
  modelDir: m.path.join(appRoot, 'schemas/'),
  Server: {
    port: 3000,
    endpoint: '*',
    webRoot: 'www'
  },
  classes: [
    'Mongo',
    'Server',
    'Login',
    'Order',
    'Employee',
    'OrderRow',
    'Part'
  ],
  Login: {
    route: '/bilverkstad/login'
  },
  Employee: {
    route: '/bilverkstad/employee'
  },
  Order: {
    route: '/bilverkstad/order'
  },
  Part: {
    route: '/bilverkstad/part/:id?'
  }
};

g.classes = {};
g.settings.classes.forEach((x)=>{
    g.classes[x] = require(m.path.join(g.settings.appRoot + 'classes/' + x + '.class.js'));
});

// Connect to MongoDB
new g.classes.Mongo();

// Start server
new g.classes.Server();