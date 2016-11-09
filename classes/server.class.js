module.exports = class Server {
 
	constructor(Mongo){

		this.app = m.express();

		this.app.use(m.bodyparser.json());

		this.app.use(m.bodyparser.urlencoded({extended: false}));

		//this.app.use(m.express.static(g.appRoot + g.webRoot));

		new g.classes.Mongo(this.app);

		this.setup();
	}

	setup(){
		var me = this;

		/*this.app.get('/', function(req, res){

			res.sendFile(g.appRoot + g.webRoot + '/index.html');
		});*/
		
		this.app.listen(g.port, function(){

		  	console.log("runing at port: ", g.port);
		});
	}
}