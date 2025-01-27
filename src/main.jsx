import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Toaster
      position="top-center"
      toastOptions={{
        duration: 2000,
        style: {
          background: '#333',
          color: '#fff',
        },
        success: {
          style: {
            background: '#166534',
          },
        },
        error: {
          style: {
            background: '#991B1B',
          },
        },
      }}
    />
  </React.StrictMode>,
)
