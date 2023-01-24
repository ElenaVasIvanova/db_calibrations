const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Моля, въведете име']
	},
	email: {
		type: String,
		required: [true, 'Моля, въведете email'],
		unique: true, 
	},
	password: {
		type: String,
		required: [true, 'Моля, въведете парола'],
		unique: true, 
	},
},{
	timestamps: true,
})
module.exports = mongoose.model('User', userSchema)