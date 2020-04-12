import React, {useState} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


import Home from './components/Home';
import About from './components/About';
import CurrentProjects from './components/CurrentProjects';
import SamCreates from './components/SamCreates';
import SamTeaches from './components/SamTeaches';
import Contact from './components/Contact';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import './App.css';

let baseUrl = 'http://localhost:3000';


const App = props => {

    const [expanded, setExpanded] = useState(false);

let content = (
        <Router>
            <div>
                <Navbar className='nav-bar' sticky="top" expand="lg" expanded={expanded}>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <div className='navlink'>
                                <Link to="/">Home</Link>
                            </div>
                            <div className='navlink'>
                                <Link to="/about" onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>About</Link>
                            </div>
                            <div className='navlink'>
                                <Link to="/current-projects" onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>Current Projects</Link>
                            </div>
                            <div className='navlink'>
                                <Link to="/sam-creates" onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>Sam Creates</Link>
                            </div>
                            <div className='navlink'>
                                <Link to="/sam-teaches" onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>Sam Teaches</Link>
                            </div>
                            <div className='navlink'>
                                <Link to="/contact" onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>Contact</Link>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>


                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/about">
                        <About
                            baseUrl={baseUrl}/>
                    </Route>
                    <Route path="/current-projects">
                        <CurrentProjects baseUrl={baseUrl}/>
                    </Route>
                    <Route path="/sam-creates">
                        <SamCreates baseUrl={baseUrl}/>
                    </Route>
                    <Route path="/sam-teaches">
                        <SamTeaches baseUrl={baseUrl}/>
                    </Route>
                    <Route path="/contact">
                        <Contact baseUrl={baseUrl}/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
    return content;
}

export default App;
