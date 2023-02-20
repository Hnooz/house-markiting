import { useState, useEffect } from 'react'
import { updateDoc, doc } from 'firebase/firestore'
import { db } from '../../firebase.config'
import { toast } from 'react-toastify'
import { getAuth, updateProfile } from "firebase/auth"
import { useNavigate } from 'react-router-dom'
function Profile() {
  const auth = getAuth()
  const [ changeDetails, setChangeDetails ] = useState(false)
  const [ formData, setFormData ] = useState({
      name: auth.currentUser.displayName,
      email: auth.currentUser.email,
  })
  const {name, email} = formData
  const onSubmit = async () => {
    try {
      if (auth.currentUser.displayName !== name) {
        await updateProfile(auth.currentUser, {
          displayName: name,
        })
        const userRef = doc(db, 'users', auth.currentUser.uid)
        await updateDoc(userRef, { name })
        toast.success('profile updated successfully')
      }

    } catch (error) {
      console.log(error);
      toast.error('Could not update profile details')
    }
  }
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }))
  }
  return (
    <section className="max-w-4xl p-6 mx-auto mt-6 bg-white rounded-md shadow-md">
      <h2 className="text-lg font-semibold text-gray-700 capitalize">
        Account settings
      </h2>
      <form>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label className="text-gray-700" htmlFor="username">
              Username
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={onChange}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label
              className="text-gray-700"
              htmlFor="emailAddress"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={onChange}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
            />
          </div>
        </div>
        <div className="flex justify-end mt-6">
          <button type='button' onClick={onSubmit} className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-emerald-700 rounded-md hover:bg-emerald-600 focus:outline-none focus:bg-emerald-600">
            Save
          </button>
        </div>
      </form>
    </section>

  )
}

export default Profile