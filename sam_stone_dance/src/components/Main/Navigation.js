import React, { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Dropdown} from 'react-bootstrap';

import './Navigation.css'

import { NavLink } from "react-router-dom";


const Navigation = props => {

    const [expanded, setExpanded] = useState(false);

    return (

            <Navbar className='nav-bar' sticky="top" expand="lg" expanded={expanded}>
                <Navbar.Brand id='brand' as = {NavLink} to="/" onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>Sam Stone Dance</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <div className='navlink'>
                            <NavDropdown title = "About">
                            <Dropdown.Item as = {NavLink} to="/about" activeClassName='active' onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>Bio</Dropdown.Item>
                            <Dropdown.Item as = {NavLink} to="/dance-reel"onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>Dance Reel</Dropdown.Item>
                            </NavDropdown>
                        </div>
                        <div className='navlink'>
                            <Nav.Link as = {NavLink} to="/current-projects"onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>Current Projects</Nav.Link>
                        </div>
                        <div className='navlink'>
                            <Nav.Link as = {NavLink} to="/sam-creates"  onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>Sam Creates</Nav.Link>
                        </div>
                        <div className='navlink'>
                            <NavDropdown title = "Sam Teaches">
                                <Dropdown.Item  as = {NavLink} to="/sam-teaches-adult">Adult Classes</Dropdown.Item>
                                <Dropdown.Item as = {NavLink}  to="/sam-teaches-child">Child Classes</Dropdown.Item>
                                <Dropdown.Item  as = {NavLink} to="/teaching-philosophy">Teaching Philosophy</Dropdown.Item>
                            </NavDropdown>
                        </div>
                        <div className='navlink'>
                            <Nav.Link  as = {NavLink} to="/contact"  onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>Contact</Nav.Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
    );
}

export default Navigation;
