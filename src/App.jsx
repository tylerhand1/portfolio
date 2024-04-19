import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'
import './index.css'

// Pages
import Home from './pages/Home'
import Education from './pages/Education'
import Projects from './pages/Projects'

const App = () => {
  return (
    <Router>
      <div>
        <Link to="/">home</Link>
        <Link to="/education">education</Link>
        <Link to="/projects">projects</Link>
      </div>
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/education" element={<Education />}/>
        <Route path="projects" element={<Projects />}/>
      </Routes>
    </Router>
  )
}

export default App
