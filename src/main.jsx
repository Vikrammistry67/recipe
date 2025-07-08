import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Context from './context/Context.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  
  <Context>

    <BrowserRouter>
      <App />
      <ToastContainer position='top-center'/>
    </BrowserRouter>

  </Context>,
)
