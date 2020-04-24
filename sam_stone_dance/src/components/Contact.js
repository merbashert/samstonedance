import React from 'react'
import moon from '../assets/moon.png'
import cv from '../assets/CV.pdf'

class Contact extends React.Component {
    render () {
        return(
            <div className='contact-container'>
                <img src = {moon} className = 'moon_drop' id='moon_contact' alt='moon'></img>
                <div className='contact-info'>
                    <h4>reach Sam at:</h4>
                    <br/>
                    <h4 className='mail' style={{marginLeft: '0px'}}>
                        <span className='fa fa-envelope-o' style={{fontSize: '35px'}}>
                        </span><a href = 'mailto:samstone16@gmail.com'>samstone16@gmail.com</a></h4>

                    <h4 className='instagram'><span className='fa fa-instagram'></span><a href = 'https://www.instagram.com/otherdance' target="_blank" rel="noopener noreferrer">@otherdance</a></h4>

                    <h4 className='cv'><span className='fa fa-arrow-circle-o-down'></span><a href = {cv} download>download CV</a></h4>
                </div>
            </div>
        )
    }
}

export default Contact;
