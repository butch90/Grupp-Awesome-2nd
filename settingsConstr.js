// constructs m.settings object
module.exports = function() {
  var m = this,
      appRoot = m.path.normalize(__dirname +'/');
  
  m.settings = {
    appRoot: appRoot,
    classLoader: {
      baseDir: m.path.join(appRoot,'classes/'),
      toLoad: [
        'Server',
        'LessWatch'
      ]
    },
    Server: {
      endpoint: '*',
      // favicon: 'www/favicon.ico',
      webroot: 'www',
      indexFile: 'index.html',
      port: 3000,
      helpers: [ // server dependant classes
        'LessWatch'
      ]
    },
    LessWatch: {
      paths: {
        watchDirs: [
          './less/**/*.less'
        ],
        lessInput: [
          './less/all.less'
        ],
        cssOutput: './www/css'
      }
    }
  };
};
