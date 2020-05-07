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
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/dance-reel">
                <DanceReel />
            </Route>
            <Route path="/current-projects">
                <CurrentProjects />
            </Route>
            <Route path="/sam-creates">
                <SamCreates />
            </Route>
            <Route path="/teaching-philosophy">
                <SamTeachPhilosophy />
            </Route>
            <Route path="/sam-teaches-adult">
                <SamTeachesAdult />
            </Route>
            <Route path="/sam-teaches-child">
                <SamTeachesChild />
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>
        </Switch>
    )

}
