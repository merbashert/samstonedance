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
        const getImageUrl = axios.get('http://localhost:8000/wp-json/wp/v2/posts?tags=3');
        const getAuthor = axios.get('http://localhost:8000/wp-json/wp/v2/posts?tags=4');

        Promise.all([getImageUrl, getAuthor]).then(res => {
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
                <div>
                    <h1>Sam Stone evening length dance works</h1>
                    {samProjectsEvening.map(project => (
                        <Project key = {project.id} project={project}/>
                    ))}

                    <br/>

                    <h1>Other dreams and projects</h1>
                    {samProjectsOther.map(project => (
                        <Project key = {project.id} project={project}/>
                    ))}

                </div>
            )
        }
        return <h3>Loading...</h3>
    }
}

export default SamCreates;
