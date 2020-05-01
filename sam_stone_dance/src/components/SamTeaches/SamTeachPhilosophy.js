import React from 'react'

import axios from 'axios';

import cv from '../../assets/CV.pdf'
import './SamTeaches.css'

class SamTeachPhilosophy extends React.Component {
    state = {
        teachPhilosophy: '',
        image: '',
        isLoaded: false
    }

    componentDidMount() {
        const getTeachPhilosophy = axios.get('http://axi.smv.mybluehost.me/wp-json/wp/v2/posts/109?_embed')


        Promise.all([getTeachPhilosophy]).then(res => {
            this.setState({
                teachPhilosophy: res[0].data,
                image: res[0].data._embedded['wp:featuredmedia']['0'].source_url,
                isLoaded: true
            })
        }).catch(err => console.log(err));
    }

    render () {
        const { teachPhilosophy, image, isLoaded } = this.state;
        if(isLoaded) {
            return(
                <div className='teaching-philosophy'
                    style={{
                        backgroundImage: `url(${image})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}>
                    <h3>Teaching Philosophy</h3>
                    <h6 dangerouslySetInnerHTML = {{__html: teachPhilosophy.content.rendered}}></h6>

                    <h6 className='cv'><span className='fa fa-arrow-circle-o-down'></span><a href = {cv} download>Download Teaching CV PDF</a></h6>
                </div>
            )
        }
        return <div id='loading'><h3>Loading...</h3></div>

    }
}

export default SamTeachPhilosophy;
