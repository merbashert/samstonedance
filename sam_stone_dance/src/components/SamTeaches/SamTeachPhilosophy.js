import React from 'react'

import axios from 'axios';

import './SamTeaches.css'

class SamTeachPhilosophy extends React.Component {
    state = {
        teachPhilosophy: '',
        isLoaded: false
    }

    componentDidMount() {
        const getTeachPhilosophy = axios.get('https://samstonedance.com/wp-json/wp/v2/posts/109')


        Promise.all([getTeachPhilosophy]).then(res => {
            this.setState({
                teachPhilosophy: res[0].data,
                isLoaded: true
            })
        }).catch(err => console.log(err));
    }

    render () {
        const { teachPhilosophy, isLoaded } = this.state;
        if(isLoaded) {
            return(
                <div className='teaching-philosophy'>
                    <h6 dangerouslySetInnerHTML = {{__html: teachPhilosophy.content.rendered}}></h6>


                </div>
            )
        }
        return <div id='loading'><h3>Loading...</h3></div>

    }
}

export default SamTeachPhilosophy;
