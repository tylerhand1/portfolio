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
import PageNotFound from './pages/PageNotFound';

// Project Pages
import BioLabSim from './pages/projects/BioLabSim';
import DoodleDesigner from './pages/projects/DoodleDesigner';
import ProxyWebServer from './pages/projects/ProxyWebServer';
import SatTrack from './pages/projects/SatTrack';

ReactDOM.createRoot(document.getElementById('root')).render( 
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/home' element={<Navigate to={'/'} />} />
        <Route path='/' element={<Home />} />
        <Route path='/education' element={<Education />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='*' element={<PageNotFound />} />

        {/* Projects */}
        <Route path={'/projects/Biology-Lab-Simulator'} element={<BioLabSim />} />
        <Route path={'/projects/HackCU10-Sat-Track'} element={<SatTrack />} />
        <Route path={'/projects/Proxy-Web-Server'} element={<ProxyWebServer />} />
        <Route path={'/projects/Doodle-Designer'} element={<DoodleDesigner />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
