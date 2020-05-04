import React from 'react'

import axios from 'axios';

import './SamTeaches.css'

class SamTeachesChild extends React.Component {
    state = {
        childTeach: '',
        image: '',
        isLoaded: false
    }

    componentDidMount() {
        const getChildTeach = axios.get('http://axi.smv.mybluehost.me/wp-json/wp/v2/posts/113?_embed')


        Promise.all([getChildTeach]).then(res => {
            this.setState({
                childTeach: res[0].data,
                image: res[0].data._embedded['wp:featuredmedia']['0'].source_url,
                isLoaded: true
            })
        }).catch(err => console.log(err));
    }


    render () {
        const { childTeach, image, isLoaded } = this.state;
        if(isLoaded) {
            return(
                <div className='child-teach'>
                    <h3>Creative Dance For Kids</h3>
                    <hr />
                    <img src = {image} alt = 'Sam black and white' className = 'child-teach-photo'/>
                    <h6 dangerouslySetInnerHTML = {{__html: childTeach.content.rendered}}></h6>
                    <div id='button-container'>
                        <h6 id='class-button'>
                            <a href='https://www.youtube.com/channel/UCGEu46ySZPvZM4XlON77PlA?view_as=subscriber' target="_blank" rel="noopener noreferrer">
                                Check out Sam's Creative Dance Lessons Online
                            </a></h6>

                        </div>

                    </div>
                )
            }
            return <div id='loading'><h3>Loading...</h3></div>

        }
    }

    export default SamTeachesChild;
