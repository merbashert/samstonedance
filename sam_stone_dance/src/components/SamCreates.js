import React from 'react';
import Project from './Project';
import axios from 'axios';
import moon from '../assets/moon.png'

export class SamCreates extends React.Component {
    state = {
        samProjectsEvening: {},
        samProjectsOther: {},
        isLoaded: false
    }

    componentDidMount() {
        const getEvening = axios.get('http://localhost:8000/wp-json/wp/v2/posts?tags=3');
        const getOther = axios.get('http://localhost:8000/wp-json/wp/v2/posts?tags=4');

        Promise.all([getEvening, getOther]).then(res => {
            this.setState({
                samProjectsEvening: res[0].data,
                samProjectsOther: res[1].data,
                isLoaded: true
            })
        });
    }

    render () {
        const {samProjectsEvening, samProjectsOther, isLoaded} = this.state;
        if(isLoaded) {
            return (
                <div className = 'sam-creates-container'>
                    <img src = {moon} className='moon_drop' id='moon_creates' alt='moon'></img>
                    <h1 id='evening'>Sam Stone evening length dance works</h1>
                    <div id='evening-project-list'>
                        {samProjectsEvening.map((project, id) => (
                            <Project key = {project.id} project={project}/>
                        ))}
                    </div>
                    <br/>
                    <div id='other-project-list'>
                    <h1 id='other'>Other dreams and projects</h1>
                    {samProjectsOther.map((project, id) => (
                        <Project key = {project.id} project={project}/>
                    ))}
                    </div>

                </div>
            )
        }
        return <div id='loading'><h3>Loading...</h3></div>
    }
}

export default SamCreates;
