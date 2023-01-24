const express = require('express')
const router = express.Router()
const {getCalibrations, createCalibration, getCalibration, updateCalibration,
	deleteCalibration} = require('../controllers/calibrationController')
	const {protect} = require('../middleware/authMiddleware')
//Re-route
const noteRouter = require('./noteRoutes')
router.use('/:calibrationId/notes', noteRouter)
router.route('/').post(protect, createCalibration).get(protect, getCalibrations)
router.route('/:id').get(protect, getCalibration).delete(protect, deleteCalibration).put(protect, updateCalibration)
module.exports = router
