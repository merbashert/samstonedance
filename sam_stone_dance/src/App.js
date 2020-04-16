import React, {useState} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';



import Home from './components/Home';
import About from './components/About';
import CurrentProjects from './components/CurrentProjects';
import SamCreates from './components/SamCreates';
import SamTeachesAdult from './components/SamTeachesAdult';
import SamTeachesChild from './components/SamTeachesChild';
import Contact from './components/Contact';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";

import './App.css';

let baseUrl = 'http://localhost:3000';


const App = props => {

    const [expanded, setExpanded] = useState(false);

let content = (
        <Router>

                <Navbar className='nav-bar justify-content-center' sticky="top" expand="lg" expanded={expanded}>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <div className='navlink'>
                                <Nav.Link  as = {NavLink} to="/">Home</Nav.Link>
                            </div>
                            <div className='navlink'>
                                <Nav.Link as = {NavLink} to="/about" onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>About</Nav.Link>
                            </div>
                            <div className='navlink'>
                                <Nav.Link as = {NavLink} to="/current-projects" onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>Current Projects</Nav.Link>
                            </div>
                            <div className='navlink'>
                                <Nav.Link as = {NavLink} to="/sam-creates" onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>Sam Creates</Nav.Link>
                            </div>
                            <div className='navlink'>
                                <NavDropdown title = "Sam Teaches" onClick={() => setExpanded(false)}>
                                    <Nav.Link  as = {NavLink} to="/sam-teaches-adult">Adult Classes</Nav.Link>
                                    <Nav.Link as = {NavLink}  to="/sam-teaches-child">Child Classes</Nav.Link>
                                </NavDropdown>
                            </div>
                            <div className='navlink'>
                                <Nav.Link  as = {NavLink} to="/contact" onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>Contact</Nav.Link>
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
                    <Route path="/sam-teaches-adult">
                        <SamTeachesAdult baseUrl={baseUrl}/>
                    </Route>
                    <Route path="/sam-teaches-child">
                        <SamTeachesChild baseUrl={baseUrl}/>
                    </Route>
                    <Route path="/contact">
                        <Contact baseUrl={baseUrl}/>
                    </Route>
                </Switch>

        </Router>
    );
    return content;
}

export default App;
