import React from 'react'

import { Switch, Route } from "react-router-dom";

import Home from './Home';
import About from './About';
import CurrentProjects from './CurrentProjects';
import SamCreates from './SamCreates';
import SamTeachPhilosophy from './SamTeachPhilosophy';
import SamTeachesAdult from './SamTeachesAdult';
import SamTeachesChild from './SamTeachesChild';
import Contact from './Contact';


export default function Routes() {
    return (
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
            <Route path="/samstonedance/teaching-philosophy">
                <SamTeachPhilosophy />
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
    )

}
