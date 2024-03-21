import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Translation from './Translation';
import Desktop from './Desktop-screen';
import ContactPage from './pages/ContactPage';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Desktop />} />
            <Route path="/translation" element={<Translation />} />
            <Route path="/contact" element={<ContactPage />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);