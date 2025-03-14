import React, { useEffect, useState } from 'react'
import AppContext from './AppContext'
import axios from 'axios'

function AppProvider({ children }) {
    const [ userData, setUserData ] = useState()
    const [ isLoggedIn, setIsLoggedIn ] = useState(false)
    const [ error, setError ] = useState('')
    const [ isLoading, setLoading ] = useState(false)
    const [ loginFormData, setLoginFormData ] = useState({email: '', password: ''});
    const [ signUpFormData, setSignUpFormData ] = useState({ username: '', email: '', password: ''})

 useEffect(() =>{
  const { data} = axios.post('/api/auth')
  console.log(data)
 },[isLoggedIn])

    const values = {
        userData,
        setUserData,
        isLoggedIn,
        setIsLoggedIn,
        error, 
        setError,
        isLoading, 
        setLoading,
        loginFormData, 
        setLoginFormData,
        signUpFormData,
        setSignUpFormData
        

    }
  return (
    <AppContext.Provider value={values}>
      { children}
    </AppContext.Provider>
  )
}

export default AppProvider
