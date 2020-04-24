import React from 'react'

import axios from 'axios';

class SamTeachesAdult extends React.Component {
    state = {
        adultTeach: '',
        isLoaded: false
    }

    componentDidMount() {
        axios.get('http://axi.smv.mybluehost.me/wp-json/wp/v2/posts/111')
        .then(res => this.setState({
            adultTeach: res.data,
            isLoaded: true
        }))
        .catch(err => console.log(err));
    }


    render () {
        const { adultTeach, isLoaded } = this.state;
        if(isLoaded) {
            return(
                <div className='adult-teach'>
                <h6 dangerouslySetInnerHTML = {{__html: adultTeach.content.rendered}}></h6>
                </div>
            )
        }
        return <div id='loading'><h3>Loading...</h3></div>

    }
}

export default SamTeachesAdult;
