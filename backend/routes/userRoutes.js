const express = require('express')
const router = express.Router()
const {registerUser, loginUser, getMe} = require('../controllers/userController')
const {errorHandler} = require('../middleware/errorMiddleware')
const {protect} = require('../middleware/authMiddleware')
router.post('https://calibration.onrender.com/', registerUser)
router.post('https://calibration.onrender.com/login', loginUser)
//router.get('/me', protect, getMe)
module.exports = router
