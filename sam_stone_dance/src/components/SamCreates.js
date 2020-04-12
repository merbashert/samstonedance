import React from 'react';
import Project from './Project';
import axios from 'axios';

export class SamCreates extends React.Component {
    state = {
        samProjects: {},
        isLoaded: false
    }

    componentDidMount() {
        axios.get('http://localhost:8000/wp-json/wp/v2/posts')
        .then(res => this.setState({
            samProjects: res.data,
            isLoaded: true
        }))
        .catch(err => console.log(err))
    }
    render () {
        const {samProjects, isLoaded} = this.state;
        if(isLoaded) {
            return (
                <div>
                    {samProjects.map(project => (
                        <Project key = {project.id} project={project}/>
                    ))}

                </div>
            )
        }
        return <h3>Loading...</h3>
    }
}

export default SamCreates;
