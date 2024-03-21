import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Translation from './Translation';
import ContactPage from './pages/ContactPage';
import DesktopPage from './pages/Desktop-screen';

ReactDOM.render(
    <Router>
        <Routes>
            <Route path="/" element={<DesktopPage />} />
            <Route path="/translation" element={<Translation />} />
            <Route path="/contact" element={<ContactPage />} />
        </Routes>
    </Router>,
    document.getElementById('root')
);