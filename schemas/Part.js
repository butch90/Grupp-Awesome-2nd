var Schema = m.mongoose.Schema({
	name: {type: String, required: true},
	partId: {type: String, required: true},
	models: [{type: String}],
	price: {type: Number, required: true},
	stock: {type: String, required: true}
});

module.exports = m.mongoose.model("Part", Schema);