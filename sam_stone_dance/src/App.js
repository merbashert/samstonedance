import React, { Fragment } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import SamCreates from './components/SamCreates';

import './App.css';

function App() {
    return (
        <Router>
        <Fragment>
            <Route exact path ='/' component = {SamCreates} />
        </Fragment>
        </Router>
    );
}

export default App;
