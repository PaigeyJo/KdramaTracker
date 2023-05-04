import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './navigation/NavBar';

import HomePage from './pages/HomePage';
import About from './pages/About';

function App() {

    return(
        <Router>
            <NavBar />
            <Routes>
                <Route exact path="/" Component={HomePage} />
                <Route exact path="/about" Component={About} />
            </Routes>
        </Router>
    );
};

export default App;
