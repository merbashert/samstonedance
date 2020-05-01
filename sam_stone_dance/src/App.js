import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import Routes from './components/Main/Routes';
import Footer from './components/Main/Footer';
import Navigation from './components/Main/Navigation';


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
