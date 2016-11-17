m = {
    fs: require('fs'),
    path: require('path')
};
g = {};

for(key in require('./package.json').dependencies){
    m[key.replace(/\W/g,'')] = require(key);
}

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
        "MySQL"
    ],
    Login: {
        route: '/bilverkstad/login/:id?'
    },
    Employee: {
        route: '/bilverkstad/employee/:id?'
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
        route: '/rest/:model/:id?'
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