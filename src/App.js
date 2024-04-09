import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import TranslationPage from './pages/TranslationPage';
import ContactPage from './pages/ContactPage';
import DesktopPage from './pages/DesktopPage';
import WeatherPage from './pages/WeatherPage';
import Launchpad from './pages/LaunchpadPage';
import BubblePage from './pages/BubblePage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<DesktopPage />} />
                <Route path="/launchpad" element={<Launchpad />} />
                <Route path="/translation" element={<TranslationPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/weather" element={<WeatherPage />} />
                <Route path="/bubble" element={<BubblePage/>} />
            </Routes>
        </Router>
    )
}

export default App;