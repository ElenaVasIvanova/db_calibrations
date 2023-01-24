import {useState, useEffect} from 'react'
import {FaSignInAlt} from 'react-icons/fa'
import {toast} from 'react-toastify'
import {useSelector, useDispatch} from 'react-redux'
import {login} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import {useNavigate} from 'react-router-dom'
const Login = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	}) 
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { user, isSuccess, isLoading, isError, message } = useSelector(state => state.auth)
	const {email, password} = formData
	useEffect(() => {
		if(isError){
			toast.error(message)
		}
		if(isSuccess){
			navigate('/')
		}
	}, [isError, isSuccess, navigate, dispatch, message, user])
	const onChange = (e) =>{
		setFormData((prevState) =>({
			...prevState,
			[e.target.name]: e.target.value,
		}))
	}
	const onSubmit = (e) =>{
		e.preventDefault()
		const userData = {
			email,
			password
		}
		dispatch(login(userData))
	}
	if(isLoading){
		return <Spinner />
	}
	return (
		<>
		<section className="heading">
		<h1>
		<FaSignInAlt />Вход
		</h1>
		<p>Моля въведете email и парола</p>
		</section>
		<section >
		<form onSubmit={onSubmit}>
		<div className="form-group">
		<input type='email'
		className='form-control'
		id='email' value={email}
		name='email' onChange={onChange}
		placeholder='Въведете email' 
		required />
		</div>
		<div className="form-group">
		<input type='password'
		className='form-control'
		id='password' value={password}
		name='password' onChange={onChange}
		placeholder='Въведете парола' 
		required />
		</div>
		<div className='form-group'>
		<button className='btn btn-block'>
		Изпрати
		</button>
		</div>
		</form>
		</section>
		</>
		)	
}
export default Login