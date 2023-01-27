const express = require('express')
const PORT = process.env.PORT
/*const dotenv = require('dotenv').config()*/
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


app.use('REACT_APP_SERVER_URL/users', require('./routes/userRoutes'))
app.use('REACT_APP_SERVER_URL/calibrations', require('./routes/calibrationRoutes'))
app.use('REACT_APP_SERVER_URL/allcalibrations', require('./routes/allcalibrationRoutes'))

if (process.env.NODE_ENV === 'production'){
	app.use(express.static(path.join(__dirname, '../frontend/build')))
	app.get('*', (req, res) => res.sendFile(__dirname, '../', 'frontend', 'build', 'index.html'))
} else{
app.get('/', res.status(200))
}
app.use(errorHandler)
app.listen(PORT, () => console.log(colors.green(`Server started on port ${PORT}`)))


