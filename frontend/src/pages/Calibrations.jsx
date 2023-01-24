import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getCalibrations, reset} from '../features/calibrations/calibrationSlice'
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'
import CalibrationItem from '../components/CalibrationItem'
function Calibrations() {
	const{calibrations, isLoading, isSuccess} = useSelector((state) => state.calibration)
	const dispatch = useDispatch()
	useEffect(() => {
		return () => {
			if(isSuccess)
				dispatch(reset())
		}
// eslint-disable-next-line	
}, [isSuccess])
	useEffect(() => {
		dispatch(getCalibrations())
			// eslint-disable-next-line	
		}, [])
	if(isLoading){
		return <Spinner />
	}
	return (
		<div>
		<BackButton url='/' />
		<h1>Калибрирания</h1>
		<div className='calibration-headings'>
		<div>Клиент:</div>
		<div>Свидетелство за калибриране №:</div>
		<div>Заявка №</div>
		</div>
		{calibrations.map((calibration) => (
			<CalibrationItem key={calibration._id} calibration={calibration}
			/> ))} 
		</div>
		)
}
export default Calibrations
