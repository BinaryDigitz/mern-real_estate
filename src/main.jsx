import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import AppProvider from './context/AppProvider.jsx'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'
import './index.css'
import './my_css.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AppProvider>
  </BrowserRouter>
)
