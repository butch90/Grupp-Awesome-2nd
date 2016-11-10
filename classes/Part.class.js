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
        this.app.all(this.settings.route, function(req, res) {
            if (!me[req.method]) {
                res.sendStatus(404);
                res.end();
                return;
            }

        me[req.method](req, res);
        });
    }

    GET(req, res) {
        this.models.find({}, function(err, result) {
        var partMap = {};

        result.forEach(function(part) {
            partMap[part._id] = part;
        });
        console.log(result, partMap, "partMap");
        res.send(partMap);
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

    }

    DELETE(req, res) {

    }
};