import React from 'react'

import axios from 'axios';

class SamTeachPhilosophy extends React.Component {
    state = {
        teachPhilosophy: '',
        isLoaded: false
    }

    componentDidMount() {
        axios.get('http://axi.smv.mybluehost.me/wp-json/wp/v2/posts/109')
        .then(res => this.setState({
            teachPhilosophy: res.data,
            isLoaded: true
        }))
        .catch(err => console.log(err));
    }


    render () {
        const { teachPhilosophy, isLoaded } = this.state;
        if(isLoaded) {
            return(
                <div className='adult-teach'>
                <h6 dangerouslySetInnerHTML = {{__html: teachPhilosophy.content.rendered}}></h6>
                </div>
            )
        }
        return <div id='loading'><h3>Loading...</h3></div>

    }
}

export default SamTeachPhilosophy;
