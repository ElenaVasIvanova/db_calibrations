import {Link} from 'react-router-dom'
import {FaListAlt, FaFile, FaTable} from 'react-icons/fa'
function Home() {
	return (
		<div id="index" 
		>
		<section className="heading">
		<h1>
		Резултати от калибрирания  
		</h1>
		<p>
		на средства за измерване на осветеност
		</p>
		<br/>
		<Link to='/new-calibration' className='btn btn-reverse btn-block'>
		<FaFile /> Въвеждане на ново калибриране
		</Link>
		<Link to='/calibrations' className='btn btn-block'>
		<FaListAlt /> Списък калибрирания
		</Link>	
        <Link to='/allcalibrations' className='btn btn-reverse btn-block'>
		<FaTable /> Справки калибрирания
		</Link>	
		</section>
		</div>
		)
}
export default Home