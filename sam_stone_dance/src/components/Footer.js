import React from 'react';

const footer = (props) => (
    <div className = 'footer'>
        <h3 className='instagram'>
            <a href = 'https://www.instagram.com/otherdance' target="_blank" rel="noopener noreferrer">
                <span className='fa fa-instagram'>
                </span>
            </a>
        </h3>
        <h3 className = 'mail'>
            <a href = 'mailto:samstone16@gmail.com'>
                <span className='fa fa-envelope-o'>
                </span>
            </a>
        </h3>
    </div>
)

export default footer;
