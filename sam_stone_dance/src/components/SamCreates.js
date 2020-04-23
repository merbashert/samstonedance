import React from 'react';
import Project from './Project';
import axios from 'axios';

export class SamCreates extends React.Component {
    state = {
        samProjectsEvening: {},
        samProjectsOther: {},
        isLoaded: false
    }

    componentDidMount() {
        const getEvening = axios.get('http://axi.smv.mybluehost.me/wp-json/wp/v2/posts?tags=3');
        const getOther = axios.get('http://axi.smv.mybluehost.me/wp-json/wp/v2/posts?tags=4');

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
                    <div id='evening-project-list'>
                        {samProjectsEvening.map((project, id) => (
                            <Project key = {project.id} project={project}/>
                        ))}
                    </div>
                    <br/>
                    <div id='other-project-list'>
                    <hr />
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
