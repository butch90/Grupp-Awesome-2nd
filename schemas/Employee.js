var Schema = m.mongoose.Schema({
	firstname: {type: String, required: true},
	lastname: {type: String, required: true},
	address: {type: String, required: true},
	phone: {type: String, required: true},
	email: {type: String, required: true},
	birthdate: {type: String, required: true},
	vacation: [{
		from: {type: Date},
		to: {type: Date}
	}],
	title: {type: String, required: true}
});

module.exports = m.mongoose.model("Employee", Schema);