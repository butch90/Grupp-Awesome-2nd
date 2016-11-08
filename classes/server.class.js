module.exports = class Server{

	constructor(){

		this.app = m.express();

		this.app.use(m.bodyparser.json());

		this.app.use(m.bodyparser.urlencoded({extended: false}));

		//this.app.use(m.express.static(g.appRoot + g.webRoot));

		this.setup();
	}

	setup(){
		
		this.app.listen(g.port, function(){

		  	console.log("runing at port: ", g.port);
		});
	}
}