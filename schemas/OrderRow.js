var Schema = m.mongoose.Schema({
	service: {type: String, required: true},
	partId: {type: String, required: true},
	employees: [{ type: m.mongoose.Schema.Types.ObjectId, ref: 'Employee' }],
	parts: [{ type: m.mongoose.Schema.Types.ObjectId, ref: 'Part' }],
	price: {type: Number, required: true},
	hours: {type: Number, required: true}
});

module.exports = m.mongoose.model("OrderRow", Schema);