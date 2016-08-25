module.exports = function() {
  var m = this,
      settings = m.settings.classLoader;

  m.classes = {};
  settings.toLoad.forEach(function(c) {
    m.classes[c] = require(m.path.join(settings.baseDir, c+'.class.js'));
    m.classes[c] = m.classes[c].call(m);
  });
};