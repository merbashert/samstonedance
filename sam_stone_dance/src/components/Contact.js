import React from 'react'
import moon from '../assets/moon.png'

class Contact extends React.Component {
    render () {
        return(
            <div className='contact-container'>
            <img src = {moon} className = 'moon_drop' id='moon_contact'></img>
            <h1><a href = 'mailto:samstone16@gmail.com'>samstone16@gmail.com</a></h1>
            </div>
        )
    }
}

export default Contact;
