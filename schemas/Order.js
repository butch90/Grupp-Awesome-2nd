var Schema = m.mongoose.Schema({
	reg: {type: String, required: true},
	model: {type: String, required: true},
	date: {type: Date, default: Date.now},
	customer: [{ type: m.mongoose.Schema.Types.ObjectId, ref: 'Customer' }],
	orderRows: [{ type: m.mongoose.Schema.Types.ObjectId, ref: 'OrderRow'}],
	status: {type: String, required: true}
});

module.exports = m.mongoose.model("Order", Schema);