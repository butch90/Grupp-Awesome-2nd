var options = g.settings;

module.exports = class Part {

    constructor(express){
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

        res.send("GET");
        /*var models = require('../schemas/Part');
        models.find({}, function(err, result) {
        var Parts = {};

        result.forEach(function(part) {
          Parts[part._id] = part;
        });
        console.log(result, Parts, "Parts");
        res.send(Parts);
      });*/
    }

};