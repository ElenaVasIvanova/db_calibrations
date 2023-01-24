const mongoose = require('mongoose')
const noteSchema = mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'User'
	},
	calibration: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'Calibration'
	},
	text: {
		type: String,
		required: [true, 'Моля, въведете текст'],
	},
},{
	timestamps: true,
})
module.exports = mongoose.model('Note', noteSchema)