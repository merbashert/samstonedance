import React from 'react'
import moon from '../../assets/moon.png'

import './Contact.css'

const contact = () =>  {

    return(
        <div className='contact-container'>
            <img src = {moon} className = 'moon_drop' id='moon_contact' alt='moon'></img>
            <div className='contact-info'>
                <h4>reach Sam at:</h4>
                <br/>
                <h4 className='mail' style={{marginLeft: '0px'}}>
                    <span className='fa fa-envelope-o' id='contact-envelope'>
                    </span><a href = 'mailto:samstonedance@gmail.com'>samstonedance@gmail.com</a></h4>

                <h4 className='instagram'><span className='fa fa-instagram' id='contact-instagram'></span><a href = 'https://www.instagram.com/otherdance' target="_blank" rel="noopener noreferrer">@otherdance</a></h4>


                </div>
            </div>
        )

    }

    export default contact;
