import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { signInFailure, signInStart, signInSuccess } from '../store/userReducer'

import AppContext from '../context/AppContext'
import OAuth from '../components/OAuth'

function SignUp() {
  const [formData, setFormData] = useState({ email: '', password: '' })

  const dispatch = useDispatch()
  const navigate = useNavigate()
  let loading = false
  // Distructure loading and error from the user state
  const {  error } = useSelector(state => state.user)

 
  // Input change event function
  function handleChange(event) {
    setFormData({ ...formData, [event.target.id]: event.target.value })
  }
  // Clear form input after every submit
  function clearInput() {
    setFormData({ ...formData, email: '' })
    setFormData({ ...formData, password: '' })
  }
  // Form submit function to the database
  async function handleSubmit(event) {

    // Prevent UI refresh
    event.preventDefault()

    // Initialize loading state
    dispatch(signInStart())
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'Application/json' },
        body: JSON.stringify(formData)
      })

      // Distructure the response from the server
      const { success, message, user } = await response.json()

      // Handle Failure to Login to the server
      if (!success) {
        toast.error(message)
        dispatch(signInFailure(message))
        clearInput()
        return;
      }
      //Handle Successful login to the database
      toast.success(message)
      dispatch(signInSuccess(user))
      clearInput()
      setTimeout(() => navigate('/'), 1000)

      return;
    }
    catch (ex) {
      dispatch(signInFailure(ex.message))
    }
  }

  // UI HTML return
  return (
    <div className='p-5 mt-5 max-w-lg mx-auto border rounded-lg shadow-lg'>
      <h1 className="heading3 text-center py-4">Login</h1>
      <form action="#" className='flex flex-col gap-3' onSubmit={event => handleSubmit(event)}>

        <input value={formData.email} onChange={event => handleChange(event)} type="email" required autoComplete='email' className="border p-3 rounded-full px-4" id='email' placeholder='Email' />
        <input value={formData.password} onChange={event => handleChange(event)} type="password" required autoComplete='password' className="border p-3 rounded-full px-4" id='password' placeholder='Password' />

        <button disabled={loading} type='submit' className='bg-slate-700 my-3 cursor-pointer text-white p-3 rounded-full uppercase hover:opacity-95 disabled:opacity-70 trans'>{
          loading ? 'Loading....' : 'Login'
        }</button>
        <hr />
        {/* Signup with google component */}
        <OAuth />
      </form>
      <p className='flex justify-between p-2 text-sm'>
        <span>Don't have an account?</span>
        <Link to='/sign-up'>
          <span title='Go to sign up page' className='text-blue-700 cursor-pointer'>Sign up</span>
        </Link>
      </p>
      {
        error && <p className='text-sm text-red-500'>{error}</p>
      }
    </div>
  )
}

export default SignUp
