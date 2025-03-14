import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import AppProvider from './context/AppProvider.jsx'
import { persistor, store } from './store/store.js'
import { Provider } from 'react-redux'
import './index.css'
import './my_css.css'
import App from './App.jsx'
import { PersistGate } from 'redux-persist/integration/react'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppProvider>
      {/* Import Provider and wrap pass the store to it */}
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </AppProvider>
  </BrowserRouter>
)
