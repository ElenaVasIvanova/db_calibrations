const asyncHandler = require('express-async-handler')
const Calibration = require('../models/calibrationModel')
// @desc Get all calibrations
// @route GET /api/allcalibrations
// @access Public
const getAllCalibrations = asyncHandler(async(req, res) => {
	const allcalibrations = await Calibration.find({})
	res.status(200).json(allcalibrations)
})
module.exports = {
	getAllCalibrations,
}