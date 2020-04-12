import React, { Fragment } from 'react';
import axios from 'axios';
import moon from '../assets/moon.png'
import Image from 'react-bootstrap/Image';

class About extends React.Component {

    state = {
        about: '',
        imgUrl: '',
        isLoaded: false
    }

    componentDidMount() {

        const getAbout = axios.get('http://localhost:8000/wp-json/wp/v2/posts/102')
        const getImageUrl = axios.get('http://localhost:8000/wp-json/wp/v2/media/15')


        Promise.all([getAbout, getImageUrl]).then(res => {
            this.setState({
                about: res[0].data,
                imgUrl: res[1].data.media_details.sizes.full.source_url,
                isLoaded: true
            })
        });
    }



    render () {
        const { about, imgUrl, isLoaded } = this.state;
        if(isLoaded) {
            return(
                <div className='about'>
                    <img src = {moon} id='moon_drop'></img>
                    <img src = {imgUrl} alt= 'Sam face' className='bio'></img>
                    <h5 dangerouslySetInnerHTML = {{__html: about.content.rendered}}></h5>

                </div>
            )
        }
        return <h3>Loading...</h3>

    }
}

export default About;
