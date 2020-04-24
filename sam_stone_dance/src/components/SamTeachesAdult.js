import React from 'react'

import axios from 'axios';

class SamTeachesAdult extends React.Component {
    state = {
        adultTeach: '',
        oneOnOne: '',
        isLoaded: false
    }


    componentDidMount() {

        const getAdultTeach = axios.get('http://axi.smv.mybluehost.me/wp-json/wp/v2/posts/111')
        const getOneOnOne = axios.get('http://axi.smv.mybluehost.me/wp-json/wp/v2/posts/125')


        Promise.all([getAdultTeach, getOneOnOne]).then(res => {
            this.setState({
                adultTeach: res[0].data,
                oneOnOne: res[1].data,
                isLoaded: true
            })
        });
    }


    render () {
        const { adultTeach, oneOnOne, isLoaded } = this.state;
        if(isLoaded) {
            return(
                <div className='adult-teach'>
                <h6 dangerouslySetInnerHTML = {{__html: adultTeach.content.rendered}}></h6>
                <h6 dangerouslySetInnerHTML = {{__html: oneOnOne.content.rendered}}></h6>
                </div>
            )
        }
        return <div id='loading'><h3>Loading...</h3></div>

    }
}

export default SamTeachesAdult;
