import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Login, About, SignUp, Profile, Header } from './index'

function App() {
  return (
    <div>
      <header>
         <Header />
      </header>
      <main>
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/login' element={ <Login />} />
          <Route path='/about' element={ <About />} />
          <Route path='/sign-up' element={ <SignUp />} />
          <Route path='/profile' element={ <Profile />} />
        </Routes>
      </main>
      <footer>
        footer
      </footer>
    </div>
  )
}

export default App
