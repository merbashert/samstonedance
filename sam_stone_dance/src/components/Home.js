import React from 'react'
import banner from '../assets/Sam_banner.jpg'
import Image from 'react-bootstrap/Image';


const Home = props => {

    return (
        <div className="sitename-container">

                <Image src={banner} alt='banner'/>

        </div>
    )
}
export default Home
