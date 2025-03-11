import React, { useState } from 'react'
import AppContext from './AppContext'

function AppProvider({ children }) {
    const [ userData, setUserData ] = useState()
    const [ isLoggedIn, setIsLoggedIn ] = useState()


    const values = {
        userData,
        setUserData,
        isLoggedIn,
        setIsLoggedIn

    }
  return (
    <AppContext.Provider value={values}>
      { children}
    </AppContext.Provider>
  )
}

export default AppProvider
