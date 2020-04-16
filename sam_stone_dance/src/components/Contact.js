import React from 'react'
import moon from '../assets/moon.png'

class Contact extends React.Component {
    render () {
        return(
            <div className='contact-container'>
                <img src = {moon} className = 'moon_drop' id='moon_contact'></img>
                <div className='contact-info'>
                    <h2><a href = 'mailto:samstone16@gmail.com'>samstone16@gmail.com</a></h2>
                    <br/>
                    <h2><a href = 'https://www.instagram.com/otherdance' target="_blank">Sam's Instagram</a></h2>
                </div>
            </div>
        )
    }
}

export default Contact;
