import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export class Project extends React.Component {
    state = {
        imgUrl: '',
        isLoaded: false
    }

    static propTypes = {
        project: PropTypes.object.isRequired
    }

    componentDidMount() {
        const { featured_media } = this.props.project;
        const getImageUrl = axios.get(`http://localhost:8000/wp-json/wp/v2/media/${featured_media}`);

        Promise.all([getImageUrl]).then(res => {
            this.setState({
                imgUrl: res[0].data.media_details.sizes.full.source_url,
                isLoaded: true
            })
        });
    }
    render () {
        const { id, title, tags } = this.props.project;
        const { choreographer, performed_by, music_by, performance_date } = this.props.project.acf;
        const { imgUrl, isLoaded} = this.state;
        if(isLoaded) {
            return (
                <div className='project'>
                <img src = {imgUrl} alt={title.rendered} className='project-image'></img>
                <div className = 'project-info'>
                <h2>{ title.rendered }</h2>
                <h4>{ choreographer }</h4>
                <h4>{ performed_by }</h4>
                <h4>{ music_by }</h4>
                <h4>{ performance_date }</h4>
                </div>
                <hr/>
                </div>
            )
        }
        return null;
    }
}

export default Project;
