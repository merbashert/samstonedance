import React from 'react'

import { Switch, Route } from "react-router-dom";

import Home from '../Home/Home';
import About from '../About/About';
import DanceReel from '../About/DanceReel';
import CurrentProjects from '../CurrentProjects/CurrentProjects';
import SamCreates from '../SamCreates/SamCreates';
import SamTeachPhilosophy from '../SamTeaches/SamTeachPhilosophy';
import SamTeachesAdult from '../SamTeaches/SamTeachesAdult';
import SamTeachesChild from '../SamTeaches/SamTeachesChild';
import Contact from '../Contact/Contact';


export default function Routes() {
    return (
        <Switch>
            <Route exact path="/samstonedance/">
                <Home/>
            </Route>
            <Route path="/samstonedance/about">
                <About />
            </Route>
            <Route path="/samstonedance/dance-reel">
                <DanceReel />
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
