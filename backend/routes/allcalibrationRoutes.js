const express = require('express')
const router = express.Router()
const {getAllCalibrations} = require('../controllers/allcalibrationController')
router.route('/').get(getAllCalibrations)
module.exports = router
