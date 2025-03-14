import React from 'react'
import { toast } from 'react-toastify';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { app } from '../firebase';
import { signInStart, signInSuccess, signInFailure } from '../store/userReducer';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Install firebase with npm i firebase
function OAuth() {
  const navigate = useNavigate()
 const dispatch =  useDispatch()
  async function handleGoogleSubmit() {
    dispatch(signInStart())
    try {
      const provider = new GoogleAuthProvider()
      const auth = getAuth(app)
      // With popup means it should open in another window
      const result = await signInWithPopup(auth, provider)

      //  Distructure the the details you need from response from the google server
      const { displayName, email, photoURL } = result.user
       
       
      
      // fetch the database, register and signin the user
      const response = await fetch('/api/auth/google', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: displayName, email, photo: photoURL })
      })
      const { success, user } = await response.json()
      if(success){
        dispatch(signInSuccess(user))
        toast.success('Logged in successfully')
        setTimeout( () =>navigate('/') ,1000)
      }
    }
    catch (err) {
      console.error("Could't sign in with google", err);
      toast.error("Could't sign in with google")
      dispatch(signInFailure(err.message))
    }

  }
  return (
    <button onClick={handleGoogleSubmit} type='button' className='bg-red-700 text-white rounded-full p-2
     cursor-pointer hover:opacity-80 trans'>
      Continue with Google
    </button>
  )
}

export default OAuth
