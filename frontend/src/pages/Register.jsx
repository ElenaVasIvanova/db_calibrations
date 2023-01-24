import {useState, useEffect} from 'react'
import {FaUser} from 'react-icons/fa'
import {toast} from 'react-toastify'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {register} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
const Register = () =>  
{
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		password2: ''
	}) 
	const {name, email, password, password2} = formData
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const {user, isSuccess, isLoading, message, isError} = useSelector(state => state.auth)
	useEffect(() => {
		if(isError){
			toast.error(message)
		}
		if(isSuccess){
			navigate('/')
		}
	}, [user, isError, isSuccess, navigate, dispatch, message])
	const onChange = (e) =>{
		setFormData((prevState) =>({
			...prevState,
			[e.target.name]: e.target.value,
		}))
	}
	const onSubmit = (e) =>{
		e.preventDefault()
		if(password !== password2){
			toast.error('Паролите не съвпадат')
		} else {const userData = { name, email, password }
		dispatch(register(userData))
	}
}
if(isLoading){
	return <Spinner />
}
return (
	<>
	<section className="heading">
	<h1>
	<FaUser /> Регистрация
	</h1>
	<p>Please create an account</p>
	</section>
	<section >
	<form onSubmit={onSubmit}>
	<div className="form-group">
	<input type='text'
	className='form-control'
	id='name' value={name}
	name='name' onChange={onChange}
	placeholder='Въведете име'
	required />
	</div>
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
	<div className="form-group">
	<input type='password'
	className='form-control'
	id='password2' value={password2}
	name='password2' onChange={onChange}
	placeholder='Потвърдете паролата' 
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
export default Register