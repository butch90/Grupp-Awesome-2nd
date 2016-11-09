module.exports = class Part {

    constructor(express){
        this.app = express;

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
    }

};