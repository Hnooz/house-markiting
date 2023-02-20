import { getAuth, sendPasswordResetEmail } from "firebase/auth"
import { useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"

function ForgotPassword() {
  const [ email, setEmail ] = useState('')

  const onChange = (e) => setEmail(e.target.value)

  const onSubmit = async(e) => {
    e.preventDefault()
    try {
      const auth = getAuth()
      await sendPasswordResetEmail(auth, email)
      toast.success('Email was sent')
    } catch (error) {
      toast.error('Could not send reset email')
    }
  }
  return (
    <section className="h-screen flex items-center m-auto justify-center">
      <form onSubmit={onSubmit} className="w-full max-w-3xl mx-auto mt-6 bg-white rounded-md shadow-md">
      <div className="flex w-full bg-white max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg lg:max-w-6xl">
      <div className="hidden bg-cover lg:block lg:w-1/2"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1582139329536-e7284fece509?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80")',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }} />
      <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
        <p className="mt-3 text-xl text-center font-medium text-emerald-700">
        Forgot Password
        </p>
        <div className="mt-4">
          <label
            className="block mb-2 text-sm font-medium text-emerald-700"
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
        <div className="mt-6">
          <button type="submit" className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-emerald-800 rounded-lg hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-emerald-300 focus:ring-opacity-50">
            Send Reset Link
          </button>
        </div>
        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b  md:w-1/4" />
          <Link to="/sign-in"
            className="text-xs text-emerald-600 uppercase hover:underline"
          >
            sign in
          </Link>
          <span className="w-1/5 border-b md:w-1/4" />
        </div>
      </div>
    </div>
      </form>
    </section>

  )
}

export default ForgotPassword