import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route,  BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
