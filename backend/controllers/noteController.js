const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const Calibration = require('../models/calibrationModel')
const Note = require('../models/noteModel')
// @desc Get notes for calibration
// @route GET /api/calibrations/:calibrationId/notes
// @access Private
const getNotes = asyncHandler(async(req, res) => {
//Get user using the id in the JWT
const user = await User.findById(req.user.id)
if(!user){
	res.status(401)
	throw new Error('Потребителя не е намерен')
}
const calibration = await Calibration.findById(req.params.calibrationId)
if (calibration.user.toString() !== req.user.id){
	res.status(401)
	throw new Error('Потребителя няма достъп')
}
const notes = await Note.find({calibration: req.params.calibrationId})
res.status(200).json(notes)
})
// @desc Create calibration note 
// @route POST /api/calibrations/:calibrationId/notes
// @access Private
const createNote = asyncHandler(async(req, res) => {
//Get user using the id in the JWT
const user = await User.findById(req.user.id)
if(!user){
	res.status(401)
	throw new Error('Потребителя не е открит')
}
const calibration = await Calibration.findById(req.params.calibrationId)
if (calibration.user.toString() !== req.user.id){
	res.status(401)
	throw new Error('Потребителя няма достъп')
}
const note = await Note.create({
	text: req.body.text,
	calibration: req.params.calibrationId,
	user: req.user.id
})
res.status(200).json(note)
})
module.exports = {
	getNotes,
	createNote
}