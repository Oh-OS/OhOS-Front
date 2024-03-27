import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Translation from './Translation';
import ContactPage from './pages/ContactPage';
import DesktopPage from './pages/DesktopPage';
import WeatherPage from './pages/weatherPage';
import Launchpad from './pages/LaunchpadPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<DesktopPage />} />
                <Route path="/launchpad" element={<Launchpad />} />
                <Route path="/translation" element={<Translation />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/weather" element={<WeatherPage />} />
            </Routes>
        </Router>
    )
}

export default App;