m = {};

[
	'express',
	'express-session',
	'fs',
	'cookie-parser',
	'body-parser',
	'mongoose'
].forEach((x)=>{
	m[x.replace({/\W/g,''})] = require(x);
});