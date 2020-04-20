import React from 'react'
import moon from '../assets/moon.png'

class Contact extends React.Component {
    render () {
        return(
            <div className='contact-container'>
                <img src = {moon} className = 'moon_drop' id='moon_contact' alt='moon'></img>
                <div className='contact-info'>
                    <h4>reach her at: <a href = 'mailto:samstone16@gmail.com'><br/>samstone16@gmail.com</a></h4>
                    <br/>
                    <h4 className='instagram'><span className='fa fa-instagram'></span><a href = 'https://www.instagram.com/otherdance' target="_blank" rel="noopener noreferrer">@otherdance</a></h4>
                </div>
            </div>
        )
    }
}

export default Contact;
