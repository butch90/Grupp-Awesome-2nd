// globals
m = {};
g = {};

// Require modules
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

// constructs g.settings object
m.settingsConstr();

// loads all classes
m.classLoader();

// start LessWatch
new g.classes.LessWatch();