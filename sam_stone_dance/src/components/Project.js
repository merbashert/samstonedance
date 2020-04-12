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
                <div>
                <h2 style = {{marginBottom: '0' }}>{ title.rendered }</h2>
                <img style ={{ width: '25%'}} src = {imgUrl} alt={title.rendered}></img>
                <h4 style = {{marginBottom: '0' }}>{ choreographer }</h4>
                <h4 style = {{marginBottom: '0' }}>{ performed_by }</h4>
                <h4 style = {{marginBottom: '0' }}>{ music_by }</h4>
                <h4 style = {{marginBottom: '0' }}>{ performance_date }</h4>
                <hr/>
                </div>
            )
        }
        return null;
    }
}

export default Project;
