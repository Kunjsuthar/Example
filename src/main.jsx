import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css'; // Your custom styles

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <App />
  </StrictMode>,
)
