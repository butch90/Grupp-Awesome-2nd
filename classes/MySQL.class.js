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
			  password : 'marwen',
			  database : 'bilverkstadsql'
			});

		this.connection.connect((err) => {
			if(!err) {
			  console.log("MySQL database is connected");
        return;
			}
			console.log("Error connecting database", err);
		});
	}

	READ(id, table, callback) {
    if(id){
      this.connection.query("SELECT * FROM " + table + " WHERE id = ?", id, (err, rows, fields) => {
        callback(err, rows, fields);
      });
    }else{
			this.connection.query("SELECT * FROM " + table, (err, rows, fields) => {
	      callback(err, rows, fields);
			});
    }
	}

    POST(data, table, callback) {
      this.connection.query("INSERT INTO " + table + " SET ?", data, (err, status) => {
        callback(err, status);
      });
    }

    UPDATE(id, data, table, callback) {
      this.connection.query("UPDATE " + table + " SET ? WHERE id = ?", [data, id], (err, status) => {
        callback(err, status);
      });
    }

    DELETE(id, table, callback) {
      this.connection.query("DELETE FROM " + table + " WHERE id = ?", id, (err, status) => {
        callback(err, status);
      });
    }
};