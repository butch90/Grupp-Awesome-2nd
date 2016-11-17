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
  "mongoose",
  "mysql"
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
    'Part',
    'REST',
    'Customer',
    'MySQL'
  ],
  Login: {
    route: '/bilverkstad/login/:id?'
  },
  Employee: {
    route: '/bilverkstad/employee/:id?/:vehicles?'
  },
  Order: {
    route: '/bilverkstad/order/:id?'
  },
  Part: {
    route: '/bilverkstad/part/:id?'
  },
  OrderRow: {
    route: '/bilverkstad/orderRow/:id?'
  },
  REST: {
    route: '/bilverkstad/:model/:id?',
    routeSql: '/sql/bilverkstad/:model/:id?'
  },
  Customer: {
    route: '/bilverkstad/customer/:id?'
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