module.exports = class Server {
 
	constructor(Mongo){

		this.app = m.express();

		this.app.use(m.bodyparser.json());

		this.app.use(m.bodyparser.urlencoded({extended: false}));

		//this.app.use(m.express.static(g.appRoot + g.webRoot));

		this.setup();
	}

	setup(){
		var me = this;

		/*this.app.get('/', function(req, res){

			res.sendFile(g.appRoot + g.webRoot + '/index.html');
		});*/
		
		this.app.listen(g.port, function(){

			var date = new Date();
			var time = ((date.getHours() < 10) ? ('0' + date.getHours()) : date.getHours()) + ':' + ((date.getMinutes() < 10) ? ('0' + date.getMinutes()) : date.getMinutes());

		  	console.log("Server started at port: ", g.port + '\nTime: ' + time);
		});
	}
}