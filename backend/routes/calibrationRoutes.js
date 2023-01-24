const express = require('express')
const router = express.Router()
const {getCalibrations, createCalibration, getCalibration, updateCalibration,
	deleteCalibration} = require('../controllers/calibrationController')
	const {protect} = require('../middleware/authMiddleware')
//Re-route
const noteRouter = require('./noteRoutes')
router.use('https://calibration.onrender.com/:calibrationId/notes', noteRouter)
router.route('https://calibration.onrender.com/').post(protect, createCalibration).get(protect, getCalibrations)
router.route('https://calibration.onrender.com/:id').get(protect, getCalibration).delete(protect, deleteCalibration).put(protect, updateCalibration)
module.exports = router
