var options = g.settings;

module.exports = class Part {

    constructor(express){
        this.mongo = new g.classes.Mongo();
        this.models = this.mongo.getModel('Part');
        this.app = express;
        this.settings = options.Part;
        this.router();
    }

    router() {
    var me = this;
        this.app.all(me.settings.route, function(req, res) {
            if (!me[req.method]) {
                res.sendStatus(404);
                res.end();
                return;
            }
        res.header('X-Client-id', req.sessionID).header('X-username', req.session.xUsername);
        me[req.method](req, res);
        });
    }

    GET(req, res) {
        var part = req.body;

        var method = req.params.id ? 'findById' : 'find';

        var partId = req.params.id ? req.params.id : {};

        this.models[method](partId, function(err, result) {
          if (err) { console.log(err.stack); }
          res.json(result);
        });
    }

    POST(req, res) {
        var part = req.body;

        this.models.create(part, function(err, result) {
          if (err) { console.log(err.stack); }
          res.json(result);
        });
    }

    PUT(req, res) {
        var part = req.body;

        this.models.findByIdAndUpdate(req.params.id, part, function(err, result) {
          if (err) { console.log(err.stack); }
          res.json(result);
        });
    }

    DELETE(req, res) {

        this.models.findByIdAndRemove(req.params.id, function(err, result) {
          if (err) { console.log(err.stack); }
          res.json(result);
        });
    }
};