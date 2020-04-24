import React from 'react'

import axios from 'axios';

class SamTeachesChild extends React.Component {
    state = {
        childTeach: '',
        isLoaded: false
    }

    componentDidMount() {
        axios.get('http://axi.smv.mybluehost.me/wp-json/wp/v2/posts/113')
        .then(res => this.setState({
            childTeach: res.data,
            isLoaded: true
        }))
        .catch(err => console.log(err));
    }


    render () {
        const { childTeach, isLoaded } = this.state;
        if(isLoaded) {
            return(
                <div className='child-teach'>
                <h6 dangerouslySetInnerHTML = {{__html: childTeach.content.rendered}}></h6>
                </div>
            )
        }
        return <div id='loading'><h3>Loading...</h3></div>

    }
}

export default SamTeachesChild;
