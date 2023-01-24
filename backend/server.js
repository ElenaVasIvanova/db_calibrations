const express = require('express')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT
const colors = require('colors')
const connectDB = require('./config/db')
const {errorHandler} = require('./middleware/errorMiddleware')

//Connect to database
connectDB()

const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true}))


app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/calibrations', require('./routes/calibrationRoutes'))
app.use('/api/allcalibrations', require('./routes/allcalibrationRoutes'))


app.use(errorHandler)
app.listen(PORT, () => console.log(colors.green(`Server started on port ${PORT}`))
	)


