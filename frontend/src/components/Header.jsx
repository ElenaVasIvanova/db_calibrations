import {FaSignInAlt, FaSignOutAlt, FaUser, FaDatabase} from 'react-icons/fa'
import {Link, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {logout, reset} from '../features/auth/authSlice'
function Header() {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const {user} = useSelector((state) => state.auth)
	const onLogout = () => {
		dispatch(reset())
		dispatch(logout())
		navigate('/')
	}
	return (
		<header className='header'>
		<div className='logo'>
		<Link to='/'><FaDatabase />БД - калибрирания осветеност</Link>
		</div>
		<ul>
		{user ? (<> 
			<li>
			<button className="btn btn-reverse" onClick={onLogout}> <FaSignOutAlt /> 
			Изход
			</button>
			</li>
			</>
			) : (
			<>
			<li>
			<Link to='/login'>
			<FaSignInAlt />Вход
			</Link>
			</li>
			<li>
			<Link to='/register'>
			<FaUser />Регистрация
			</Link>
			</li>
			</>
			)}
			</ul>
			</header>
			)
}
export default Header