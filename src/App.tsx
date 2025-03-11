import './App.css'
import { Home } from './components/Home'
import { Navbar } from './components/Navbar'
import { Events } from './components/Events'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { About } from './components/About'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
