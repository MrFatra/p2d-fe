import './styles/App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Login, Home } from './pages'

function App() {

  return (
    <>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
