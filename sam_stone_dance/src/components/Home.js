import React from 'react'
import banner from '../assets/Sam_banner.jpg'
import moon from '../assets/moon.png'
import Image from 'react-bootstrap/Image';


const Home = props => {

    return (
        <div className="sitename-container">
                <Image src={banner} alt='banner' id='banner'/>
                <Image src={moon} alt='moon' id = 'moon'/>
        </div>
    )
}
export default Home
