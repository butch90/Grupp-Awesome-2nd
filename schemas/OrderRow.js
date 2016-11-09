var Schema = m.mongoose.Schema({
	service: {type: String, required: true},
	employees: [{ type: Schema.Types.ObjectId, ref: 'Employee' }],
	parts: [{ type: Schema.Types.ObjectId, ref: 'Part' }],
	price: {type: Number, required: true},
	hours: {type: Number, required: true}
});

module.exports = m.mongoose.model("OrderRow", Schema);