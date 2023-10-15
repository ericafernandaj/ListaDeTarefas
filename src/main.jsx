import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Localiza o elemento com o ID 'root' no HTML onde a aplicação será renderizada.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
