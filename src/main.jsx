import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes, Route, Navigate
} from 'react-router-dom';
import './index.css';

// Pages
import Home from './pages/Home';
import Education from './pages/Education';
import Projects from './pages/Projects';

ReactDOM.createRoot(document.getElementById('root')).render( 
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={'/home'} />}/>
        <Route path='/home' element={<Home />}/>
        <Route path="/education" element={<Education />}/>
        <Route path="projects" element={<Projects />}/>
      </Routes>
    </Router>
  </React.StrictMode>
);
