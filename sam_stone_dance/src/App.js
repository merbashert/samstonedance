import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import Routes from './components/Routes';
import Footer from './components/Footer';
import Navigation from './components/Navigation';


import {
    BrowserRouter as Router
} from "react-router-dom";

import './App.css';

const App = props => {

    return (
        <Router>
            <Navigation />
            <Routes />
            <Footer />
        </Router>
    )
}

export default App;
