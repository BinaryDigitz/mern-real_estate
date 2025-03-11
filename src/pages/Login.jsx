import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'

function SignUp() {
  const navigate = useNavigate()
  const [ error, setError ] = useState('')
  const [ isLoading, setIstLoading] = useState(false)
 const [ formData, setFormData ] = useState({ email:'', password: ''})
  function handleChange(event){
    setFormData({...formData, [event.target.id]: event.target.value })
  }
  async function handleSubmit(event){
    event.preventDefault()
    setIstLoading(true)
    try{
      const response = await fetch('/api/auth/login',{
        method: 'POST',
        headers: { 'Content-Type': 'Application/json'},
        body: JSON.stringify(formData)
      })
      const { success, message} = await response.json()
      
      if(!success) {
        toast.error(message)
        setError(message)
        setIstLoading(false)
        setFormData({...formData, email: ''})
        setFormData({...formData, password: ''})
        return ;
      }
      toast.success(message)
      setIstLoading(false)
      setFormData({...formData, email: ''})
      setFormData({...formData, password: ''})
      navigate('/')
      return ;
    }
    catch(ex){
      setIstLoading(false)
      setError(ex.message)
    }
  }
  return (
    <div className='p-5 mt-5 max-w-lg mx-auto border rounded-lg shadow-lg'>
      <h1 className="heading3 text-center py-4">Login</h1>
      <form action="#" className='flex flex-col gap-3' onSubmit={event =>handleSubmit(event)}>

        <input value={formData.email} onChange={event => handleChange(event)} type="email" required autoComplete='email' className="border p-3 rounded-full px-4" id='email' placeholder='Email'/>
        <input value={formData.password} onChange={event => handleChange(event)} type="password" required autoComplete='password' className="border p-3 rounded-full px-4" id='password' placeholder='Password'/>

        <button disabled={isLoading} type='submit' className='bg-slate-700 my-3 cursor-pointer text-white p-3 rounded-full uppercase hover:opacity-95 disabled:opacity-70 trans'>{
          isLoading? 'Loading....' : 'Login'
          }</button>
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
