import React from 'react';
import axios from 'axios';

import './CurrentProjects.css'

export class CurrentProject extends React.Component {
    state = {
        imgUrl: '',
        isLoaded: false
    }

    componentDidMount() {
        const { featured_media } = this.props.project;
        const getImageUrl = axios.get(`https://samstonedance.com/wp-json/wp/v2/media/${featured_media}`);

        Promise.all([getImageUrl]).then(res => {
            this.setState({
                imgUrl: res[0].data.media_details.sizes.full.source_url,
                isLoaded: true
            })
        });

    }

    render () {
        const { title } = this.props.project;
        const { date, location, collaborator_1, collaborator_2, collaborator_3, ticket_link } = this.props.project.acf;
        const { imgUrl, isLoaded} = this.state;

        if(isLoaded) {
            return (

                    <div className = 'current-project-info'>
                        <img src={imgUrl} alt={title.rendered} />
                        <br />
                        <h3>{ title.rendered }</h3>
                        <h6>{ date }</h6>
                        <h6>{ location }</h6>
                        <h6>{ collaborator_1 }</h6>
                        <h6>{ collaborator_2 }</h6>
                        <h6 className='ticket-link'><a href={ ticket_link } target="_blank" rel="noopener noreferrer">Buy Tickets Here!</a></h6>
                    </div>
            )
        }
        return null;
    }
}

export default CurrentProject;
