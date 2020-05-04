import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';


export class CurrentProject extends React.Component {
    state = {
        imgUrl: '',
        isLoaded: false
    }

    componentDidMount() {
        const { featured_media, id } = this.props.project;
        const getImageUrl = axios.get(`http://axi.smv.mybluehost.me/wp-json/wp/v2/media/${featured_media}`);

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

                    <div className = 'project-info'>
                        <h3>{ title.rendered }</h3>
                        <h6>{ date }</h6>
                        <h6>{ location }</h6>
                        <h6>{ collaborator_1 }</h6>
                        <h6>{ collaborator_2 }</h6>
                        <h6>{ ticket_link }</h6>
                    </div>
            )
        }
        return null;
    }
}

export default CurrentProject;
