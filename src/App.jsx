import React from 'react'
import { Home, Login, About, SignUp, Profile } from './index'

function App() {
  return (
    <div>
      <header>
        header
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
