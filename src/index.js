import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Translation from './Translation';
import Desktop from './Desktop-screen';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Desktop />} />
            <Route path="/translation" element={<Translation />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);