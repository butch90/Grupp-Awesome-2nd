var Schema = m.mongoose.Schema({
	firstname: {type: String, required: true},
	lastname: {type: String, required: true}
});

module.exports = m.mongoose.model("Test", Schema);