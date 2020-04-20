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

const App = props => {

    const [expanded, setExpanded] = useState(false);

let content = (
        <Router>
                <Navbar className='nav-bar' sticky="top" expand="lg" expanded={expanded}>
                    <Navbar.Brand id='brand'>Sam Stone Dance</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <div className='navlink'>
                                <Nav.Link  as = {NavLink} to="/samstonedance/">Home</Nav.Link>
                            </div>
                            <div className='navlink'>
                                <Nav.Link as = {NavLink} to="/samstonedance/about" onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>About</Nav.Link>
                            </div>
                            <div className='navlink'>
                                <Nav.Link as = {NavLink} to="/samstonedance/current-projects" onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>Current Projects</Nav.Link>
                            </div>
                            <div className='navlink'>
                                <Nav.Link as = {NavLink} to="/samstonedance/sam-creates" onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>Sam Creates</Nav.Link>
                            </div>
                            <div className='navlink'>
                                <NavDropdown title = "Sam Teaches">
                                    <Nav.Link  as = {NavLink} to="/samstonedance/sam-teaches-adult">Adult Classes</Nav.Link>
                                    <Nav.Link as = {NavLink}  to="/samstonedance/sam-teaches-child">Child Classes</Nav.Link>
                                </NavDropdown>
                            </div>
                            <div className='navlink'>
                                <Nav.Link  as = {NavLink} to="/samstonedance/contact" onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>Contact</Nav.Link>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>


                <Switch>
                    <Route exact path="/samstonedance/">
                        <Home/>
                    </Route>
                    <Route path="/samstonedance/about">
                        <About />
                    </Route>
                    <Route path="/samstonedance/current-projects">
                        <CurrentProjects />
                    </Route>
                    <Route path="/samstonedance/sam-creates">
                        <SamCreates />
                    </Route>
                    <Route path="/samstonedance/sam-teaches-adult">
                        <SamTeachesAdult />
                    </Route>
                    <Route path="/samstonedance/sam-teaches-child">
                        <SamTeachesChild />
                    </Route>
                    <Route path="/samstonedance/contact">
                        <Contact />
                    </Route>
                </Switch>

        </Router>
    );
    return content;
}

export default App;
