import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import { BrowserRouter } from 'react-router-dom'
import ParticleAnimation from './components/Particles.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    
    <BrowserRouter>
      <ParticleAnimation />
      <App />
    </BrowserRouter>
)
