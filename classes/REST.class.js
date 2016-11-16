module.exports = class REST {

	constructor(express) {
		this.app = express;
		this.dataBase  = new g.classes.Mongo();
        // this.mySql = new g.classes.MySQL();
		this.router();
	}
	router() {
		var me = this;
		this.app.all(g.settings.REST.route, function(req, res) {
			var model = me.dataBase.getModel(req.params.model);
			console.log('rest');
			if (!me[req.method]) {
				res.sendStatus(404);
				return;
			}

			me[req.method](req, res, model);
		});

        this.app.all(g.settings.REST.routeSql, function(req, res) {
            var table = req.params.model;
            console.log('restSql');
            if (!me[req.method + '_sql']) {
                res.sendStatus(404);
                return;
            }

            me[req.method + '_sql'](req, res, table);
        });
	}

    GET_sql(req, res, table) {

        this.mySql.READ(table, function(err, rows, fields) {
            if(err) {
                console.log(err);
                res.json(err);
            }
            res.json(rows);
        });
    }

	POST(req, res, model) {

		model.create(req.body, function(err, data) {
			if(err) {
				console.log(err.stack);
				res.json(err.stack);
			}
			res.json(data);

		});

	}
	GET(req, res, model) {

		var query = req.params.id ? 'findById' : 'find';
		var data = req.params.id ? req.params.id : {};

		model[query](data, function(err, result) {
			if(err) {
				res.json(err.stack);
			}
			res.json(result);
		});
	}
	PUT(req, res, model) {

		model.findByIdAndUpdate(req.params.id, req.body, function(err, data) {
			if(err) {
				res.json(err.stack);
				console.log(err.stack);
			}
			res.json(req.body);
		});

	}
	DELETE(req, res, model) {

		model.findByIdAndRemove(req.params.id, function(err, data) {
			if(err) {
				res.json(err.stack);
				console.log(err.stack);
			}
			res.json('Removed');
		});

	}

}