var Schema = m.mongoose.Schema({
	firstname: {type: String, required: true},
	lastname: {type: String, required: true},
	address: {type: String, required: true},
	phone: {type: String, required: true},
	email: {type: String, required: true, unique: true},
	birthdate: {type: String, required: true, unique: true}
});

module.exports = m.mongoose.model("Customer", Schema);