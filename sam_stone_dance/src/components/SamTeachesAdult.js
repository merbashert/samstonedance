import React from 'react'

import axios from 'axios';

class SamTeachesAdult extends React.Component {
    state = {
        adultTeach: '',
        oneOnOne: '',
        image: '',
        isLoaded: false
    }


    componentDidMount() {

        const getAdultTeach = axios.get('http://axi.smv.mybluehost.me/wp-json/wp/v2/posts/111?_embed')
        const getOneOnOne = axios.get('http://axi.smv.mybluehost.me/wp-json/wp/v2/posts/125')


        Promise.all([getAdultTeach, getOneOnOne]).then(res => {
            this.setState({
                adultTeach: res[0].data,
                oneOnOne: res[1].data,
                image: res[0].data._embedded['wp:featuredmedia']['0'].source_url,
                isLoaded: true
            })
        });
    }


    render () {
        const { adultTeach, oneOnOne, image, isLoaded } = this.state;
        if(isLoaded) {
            return(
                <div className='adult-teach'>
                    <img src = {image} alt = 'Sam leg extended' className = 'adult-teach-photo'/>
                <h6 dangerouslySetInnerHTML = {{__html: adultTeach.content.rendered}}></h6>
                <h6 dangerouslySetInnerHTML = {{__html: oneOnOne.content.rendered}}></h6>
                </div>
            )
        }
        return <div id='loading'><h3>Loading...</h3></div>

    }
}

export default SamTeachesAdult;
