import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import OAuth from '../components/OAuth';
function SignIn() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email:'',
    password:'',
  })

  const {email, password} = formData
  const navigate = useNavigate()
  const onChange = (e)=> {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const onSubmit = async(e)=> {
    e.preventDefault()
    try {
      const auth = getAuth()
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      if(userCredential.user){
        navigate('/profile')
      }
    } catch (error) {
      toast.error('Bad user credentials')
    }
  }
  return (
  <form onSubmit={onSubmit} className="h-screen flex items-center m-auto justify-center">
    <div className="flex w-full bg-white max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg lg:max-w-6xl">
      <div className="hidden bg-cover lg:block lg:w-1/2"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80")'
        }} />
      <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
        <p className="mt-3 text-xl text-center text-gray-600">
          Welcome back!
        </p>
        <OAuth />
        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b  lg:w-1/4" />
          <a  href="#"
            className="text-xs text-center text-gray-500 uppercase hover:underline"
          >
            or login with email
          </a>
          <span className="w-1/5 border-b  lg:w-1/4" />
        </div>
        <div className="mt-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-600"
            htmlFor="LoggingEmailAddress"
          >
            Email Address
          </label>
          <input
            id="email"
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
            type="email" value={email} onChange={onChange}
          />
        </div>
        <div className="mt-4">
          <div className="flex justify-between">
            <label
              className="block mb-2 text-sm font-medium text-gray-600 d"
              htmlFor="loggingPassword"
            >
              Password
            </label>
            <Link to="/forgot-password"
              className="text-xs text-gray-500  hover:underline"
            >
              Forget Password?
            </Link>
          </div>
          <div className='relative'>
            <input
              id="password"
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type={showPassword ? 'text' : 'password'} value={password} onChange={onChange}
            />
            <svg onClick={()=> {setShowPassword((prevState) => !prevState)}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute right-0 top-1/4 mx-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>

          </div>
        </div>
        <div className="mt-6">
          <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-emerald-800 rounded-lg hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-emerald-300 focus:ring-opacity-50">
            Sign In
          </button>
        </div>
        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b  md:w-1/4" />
          <Link to="/sign-up"
            className="text-xs text-gray-500 uppercase hover:underline"
          >
            or sign up
          </Link>
          <span className="w-1/5 border-b md:w-1/4" />
        </div>
      </div>
    </div>
  </form>

  )
}

export default SignIn