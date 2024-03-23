import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Translation from './Translation';
import ContactPage from './pages/ContactPage';
import DesktopPage from './pages/DesktopPage';
import WeatherPage from './pages/weatherPage';

ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/" element={<DesktopPage />} />
            <Route path="/translation" element={<Translation />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/weather" element={<WeatherPage />} />
        </Routes>
    </Router>,
    document.getElementById('root')
);