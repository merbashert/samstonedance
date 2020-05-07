import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel'

export class Project extends React.Component {
    state = {
        imgUrl: '',
        images:{},
        isLoaded: false
    }

    static propTypes = {
        project: PropTypes.object.isRequired
    }

    componentDidMount() {
        const { featured_media, id } = this.props.project;
        const getImageUrl = axios.get(`https://samstonedance.com/wp-json/wp/v2/media/${featured_media}`);
        const getImages = axios.get(`https://samstonedance.com/wp-json/wp/v2/media?parent=${id}`);

        Promise.all([getImageUrl, getImages]).then(res => {
            this.setState({
                imgUrl: res[0].data.media_details.sizes.full.source_url,
                images: res[1].data,
                isLoaded: true
            })
        });

    }

    render () {
        const { title } = this.props.project;
        const { choreographer, additional_collaborator_1, additional_collaborator_2, additional_collaborator_3, additional_collaborator_4, description, performed_by, music_by, performance_date, video_excerpt } = this.props.project.acf;
        const { imgUrl, images, isLoaded} = this.state;
        const imageArray = [];
        for(let i = 0; i < images.length; i++) {
            imageArray.unshift(images[i].media_details.sizes.full.source_url)
        }
        if(isLoaded) {
            return (
                <div className='project'>
                    {imageArray.length > 1 ?
                        <Carousel>
                            {imageArray.map((image, id) => (
                                <Carousel.Item key={id}>
                                    <div className='project-image'>
                                        <img src={ image} alt={title.rendered}/>
                                    </div>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                        :
                        <div className='project-image'>
                            <img src={ imgUrl} alt={title.rendered}/>
                        </div>
                    }

                    <div className = 'project-info'>
                        <h3>{ title.rendered }</h3>
                        <h6>{ choreographer }</h6>
                        <h6>{ additional_collaborator_1 }</h6>
                        <h6>{ additional_collaborator_2 }</h6>
                        <h6>{ additional_collaborator_3 }</h6>
                        <h6>{ additional_collaborator_4 }</h6>
                        <h6>{ description }</h6>
                        <h6>{ performed_by }</h6>
                        <h6>{ music_by }</h6>
                        <h6>{ performance_date }</h6>
                        {video_excerpt?<a href={video_excerpt} className='btn btn-outline-dark' target="_blank" rel="noopener noreferrer"><h6>Video Excerpt</h6></a>:null}

                    </div>
                    <hr/>
                </div>
            )
        }
        return null;
    }
}

export default Project;
