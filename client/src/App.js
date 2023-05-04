import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './navigation/NavBar';

import HomePage from './pages/HomePage';
import About from './pages/About';
import Kdramas from './pages/Kdramas';
import UserKdramas from './pages/UserKdramas';


function App() {

    return(
        <Router>
            <NavBar />
            <Routes>
                <Route exact path="/" Component={HomePage} />
                <Route exact path="/about" Component={About} />
                <Route exact path="/Kdramas" Component ={Kdramas} />
                <Route exact path="/users/Kdrama" Component ={UserKdramas} />
            </Routes>
        </Router>
    );
};

export default App;
