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

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.json())
app.use(express.urlencoded({ extended: true}))


app.use('https://db-calibrations-loft.onrender.com/REACT_SERVER_URL/api/users', require('./routes/userRoutes'))
app.use('https://db-calibrations-loft.onrender.com/REACT_SERVER_URL/api/calibrations', require('./routes/calibrationRoutes'))
app.use('https://db-calibrations-loft.onrender.com/REACT_SERVER_URL/api/allcalibrations', require('./routes/allcalibrationRoutes'))

if (process.env.NODE_ENV === 'production'){
	app.use(express.static(path.join(__dirname, '../frontend/build')))
	app.get('*', (req, res) => res.sendFile(__dirname, '../', 'frontend', 'build', 'index.html'))
} else{
app.get('/', res.status(200))
}
app.use(errorHandler)
app.listen(port, () => console.log(colors.green(`Server started on port ${port}`)))


