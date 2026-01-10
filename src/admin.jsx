import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Admin from './components/Admin.jsx'
import './styles/color.css'

createRoot(document.getElementById('admin-root')).render(
  <StrictMode>
    <Admin />
  </StrictMode>,
)