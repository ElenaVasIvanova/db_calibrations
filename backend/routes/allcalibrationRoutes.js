const express = require('express')
const router = express.Router()
const {getAllCalibrations} = require('../controllers/allcalibrationController')
router.route('https://calibration.onrender.com/').get(getAllCalibrations)
module.exports = router
