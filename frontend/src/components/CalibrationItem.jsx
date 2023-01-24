import {Link} from 'react-router-dom'
function CalibrationItem({calibration}) {
	return (
		<div className='calibration'>
		<div>{calibration.client}</div>
		<div>{calibration.num_calibration_certificate}</div>
		<div>{calibration.application_num}</div>
		<div>
		<Link to={`/calibrations/${calibration._id}`} className='btn btn-reverse btn-sm'>
		Покажи
		</Link>
		</div>
		</div>
		)
}
export default CalibrationItem