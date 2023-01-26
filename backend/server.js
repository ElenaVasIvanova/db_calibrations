const express = require('express')
const port = process.env.PORT
const dotenv = require('dotenv').config()
const path = require('path')
const colors = require('colors')
const connectDB = require('./config/db')
const {errorHandler} = require('./middleware/errorMiddleware')

//Connect to database
connectDB()

const app = express()


// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   next(); 
//   });
app.use(express.json())
app.use(express.urlencoded({ extended: true}))


app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/calibrations', require('./routes/calibrationRoutes'))
app.use('/api/allcalibrations', require('./routes/allcalibrationRoutes'))
if (process.env.NODE_ENV === 'production'){
	app.use(express.static(path.join(__dirname, '../frontend/build')))
	app.get('*', (req, res) => res.sendFile(__dirname, '../', 'frontend', 'build', 'index.html'))
}

app.use(errorHandler)
app.listen(port, () => console.log(colors.green(`Server started on port ${port}`))
	)


