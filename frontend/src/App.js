import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import NewCalibration from './pages/NewCalibration'
import Calibrations from './pages/Calibrations'
import Calibration from './pages/Calibration'
//import UpdateCalibration from './pages/UpdateCalibration'
import Third from './components/Third'
import Fourth from './components/Fourth'
import Fifth from './components/Fifth'
import Sixth from './components/Sixth'
import Seventh from './components/Seventh'
import Eighth from './components/Eighth'
import Ninth from './components/Ninth'
import Tenth from './components/Tenth'
import AllCalibrations from './pages/AllCalibrations'
import TableCalibrations from './components/TableCalibrations'
import UpdateCalibration from './pages/UpdateCalibration'

function App() {
	return (
		<div className="App">
		<Router>
		<div className='container'>
		<Header />
		<Routes>
		<Route path='/' element={<Home />} />
		<Route path='/login' element={<Login />} />
		<Route path='/register' element={<Register />} />
		<Route path='/new-calibration' element={<PrivateRoute />} >	
		<Route path='/new-calibration' element={<NewCalibration />} />
		</Route>
		<Route path='/calibrations' element={<PrivateRoute />} >
		<Route path='/calibrations' element={<Calibrations />} />
		</Route>
		<Route path='/calibrations/:calibrationId' element={<PrivateRoute />} >
		<Route path='/calibrations/:calibrationId' element={<Calibration />} />
		</Route>
		<Route path='/update/:calibrationId' element={<PrivateRoute />} >
		<Route path='/update/:calibrationId' element={<UpdateCalibration />} />
		</Route>
		<Route path='/allcalibrations' element={<AllCalibrations />} />
		<Route path='/table'  element={<TableCalibrations />} />
		
		</Routes>
		<ToastContainer />	
		</div>
		</Router>
		</div>
		)
	}
	export default App