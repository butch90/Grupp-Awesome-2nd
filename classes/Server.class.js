module.exports = function() {
  var m = this,
      s = this.settings;

  return class Server {
    constructor() {
      this.appRoot = s.appRoot;
      this.settings = s.Server;
      this.app = m.express();

      // deploy server
      this.setup();
    }

    setup() {
      this.app
        .use(m.compression())
        .use(m.bodyparser.json())
        .use(m.bodyparser.urlencoded({ extended: false }))
        .use(m.cookieparser())
        .use(m.express.static(m.path.join(this.appRoot, this.settings.webroot)));

      this.settings.favicon && this.app.use(m.servefavicon(this.appRoot+this.settings.favicon));

      // setup service modules
      var me = this;
      this.settings.helpers.forEach(function(s) {
        new m.classes[s](me.app);
      });

      // Start up
      this.app.get(this.settings.endpoint, function (req, res) {
        res.sendFile(me.settings.indexFile, {root: './'+me.settings.webroot});
      });

      this.app.listen(this.settings.port, function(){
        console.log("Express server listening on port " + me.settings.port);
      });
    }
  };
}