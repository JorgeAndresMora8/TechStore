import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import { CartProvider } from './context/context.jsx'
import { AxiosInterceptor } from './interceptors/axios.interceptors.js'

// AxiosInterceptor()

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}>
      <CartProvider>
        <App />
      </CartProvider>
    </Provider>
  // </React.StrictMode>,
)
