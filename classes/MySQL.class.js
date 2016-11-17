module.exports = class MySQL {
	constructor(express){
		this.app = express;
		this.mySql = m.mysql;
		this.connect();

	}
	connect() {
		this.connection = this.mySql.createConnection({
			  host     : '127.0.0.1',
			  //ersätt med eget användarnamn nedan
			  user     : 'root',
			  //ersätt med eget password nedan
			  password : 'alxw',
			  database : 'bilverkstadsql'
			});

		this.connection.connect((err) => {
			if(!err) {
			  console.log("Database is connected");
              return;
			}
			console.log("Error connecting database", err);
		});
	}

	READ(table, callback) {
		this.connection.query("SELECT * FROM " + table, (err, rows, fields) => {
            callback(err, rows, fields);
		});
	}

    POST(data, table, callback) {
        this.connection.query("INSERT INTO " + table + " SET ?", data, (err, status) => {
            callback(err, status);
        });
    }

    UPDATE(id, data, table, callback) {
        this.connection.query("UPDATE " + table + " SET ? WHERE ?", [data, id], (err, status) => {
            callback(err, status);
        });
    }

    DELETE(id, table, callback) {
        this.connection.query("DELETE FROM " + table + " WHERE id = ?", id, (err, status) => {
            callback(err, status);
        });
    }
};