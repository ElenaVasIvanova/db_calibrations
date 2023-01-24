import {FaArrowLeft} from 'react-icons/fa'
import {Link} from 'react-router-dom'
function BackButton({url}) {
	return (
		<Link to={url} className='btn btn-reverse btn-back'>
		<FaArrowLeft />Назад
		</Link>
		)
}
export default BackButton