import './styles/App.css'
import {Route,  BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {

  return (
    <>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
