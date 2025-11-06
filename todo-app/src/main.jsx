import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render( // This renders the React application into the root div
  <StrictMode>
    <App />
  </StrictMode>,
)
