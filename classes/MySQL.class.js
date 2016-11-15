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

	UPDATE(){
		
		var table = 'insert_table_here';
		this.connection.query('UPDATE ' + table + 'SET row = ?, row2 = ? WHERE id = ?', [row, row2, id], (err, rows, fields) => {
			if(!err){
				console.log('No error');
			} console.log("error", err.stack);
		});
	}

	POST(){
		var data = {}
		var table = 'insert_table_here';
		this.connection.query('INSERT INTO' + table + 'SET', data, (err, result) => {
			if(!err) {
				console.log(result);
			}
		});
	}
}