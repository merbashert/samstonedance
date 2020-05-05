import React from 'react';
import CurrentProject from './CurrentProject';
import axios from 'axios';

import collage from '../../assets/collage.jpg'
import './CurrentProjects.css'

export class CurrentProjects extends React.Component {
    state = {
        currentProjects: {},
        isLoaded: false
    }

    componentDidMount() {
        const getCurrent = axios.get('http://axi.smv.mybluehost.me/wp-json/wp/v2/posts?categories=8');

        Promise.all([getCurrent]).then(res => {
            this.setState({
                currentProjects: res[0].data,
                isLoaded: true
            })
        });
    }

    render () {
        const {currentProjects, isLoaded} = this.state;


        if(isLoaded) {
            return (
                <div className='current-projects'>
                    <h2>For up-to-date news, visit the <a href = 'https://www.facebook.com/Sam-Stone-Dance-108382910851063' target="_blank" rel="noopener noreferrer">Sam Stone Dance Facebook page</a></h2>
                    {currentProjects.length < 1 ?
                        <div className='no-events' style={{
                            backgroundImage: `url(${collage})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat'
                        }}>
                            <h1>Stay tuned!</h1>
                        </div>
                        :
                        <div id='current-project-list'>
                            {currentProjects.map((project, id) => (
                                <CurrentProject key = {project.id} project={project}/>
                            ))}
                        </div>
                    }
                </div>
            )
        }
        return <div id='loading'><h3>Loading...</h3></div>
    }
}

export default CurrentProjects;
