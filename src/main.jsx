import React from 'react'
import ReactDOM from 'react-dom/client'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
  </React.StrictMode>,
)
