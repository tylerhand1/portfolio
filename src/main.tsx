import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes, Route, Navigate
} from 'react-router-dom';
import '@/stylesheets/index.css';
import '@/stylesheets/font.css';

// Pages
import Home from '@/pages/Home';
import Education from '@/pages/Education';
import Projects from '@/pages/Projects';
import PageNotFound from '@/pages/PageNotFound';

// Project Pages
import MultiplayerTicTacToe from '@/pages/projects/MultiplayerTicTacToe';
import ViableVirtualLab from '@/pages/projects/ViableVirtualLab';
import DoodleDesigner from '@/pages/projects/DoodleDesigner';
import ProxyWebServer from '@/pages/projects/ProxyWebServer';
import SatTrack from '@/pages/projects/SatTrack';

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/home' element={<Navigate to={'/'} />} />
        <Route path='/' element={<Home />} />
        <Route path='/education' element={<Education />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='*' element={<PageNotFound />} />

        {/* Projects */}
        <Route path={'/projects/Multiplayer-Tic-Tac-Toe'} element={<MultiplayerTicTacToe />} />
        <Route path={'/projects/Viable-Virtual-Lab'} element={<ViableVirtualLab />} />
        <Route path={'/projects/HackCU10-Sat-Track'} element={<SatTrack />} />
        <Route path={'/projects/Proxy-Web-Server'} element={<ProxyWebServer />} />
        <Route path={'/projects/Doodle-Designer'} element={<DoodleDesigner />} />
      </Routes>
    </Router>
  </React.StrictMode>
);