import React from 'react';
import axios from 'axios';

class About extends React.Component {

    state = {
        about: '',
        imgUrl: '',
        isLoaded: false
    }

    componentDidMount() {

        const getAbout = axios.get('http://axi.smv.mybluehost.me/wp-json/wp/v2/posts/102')
        const getImageUrl = axios.get('http://axi.smv.mybluehost.me/wp-json/wp/v2/media/15')


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
                        <div className = 'positioner'></div>
                        <img src = {imgUrl} alt="sam face" className='bio'></img>
                        <h6 dangerouslySetInnerHTML = {{__html: about.content.rendered}}></h6>
                </div>
            )
        }
        return <div id='loading'><h3>Loading...</h3></div>

    }
}

export default About;
