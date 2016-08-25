// Require modules
var m = {};

[
  "babel-core/register",
  "babel-polyfill",
  "express",
  "compression",
  "path",
  "fs",
  "serve-favicon",
  "cookie-parser",
  "body-parser",
  "gulp",
  "gulp-less",
  "gulp-clean-css",
  "./settingsConstr",
  "./classLoader"
].forEach(function(x){
  // store required modules in m
  m[x.replace(/\W/g,'')] = require(x);
});

// constructs m.settings object
m.settingsConstr();

// loads all classes
m.classLoader();

// start express server
m.classes.Server && new m.classes.Server();