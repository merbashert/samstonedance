import React from 'react';

const footer = (props) => (
    <div className = 'footer'>
        <div className = 'social'>
            <h3 className='instagram'>
                <a href = 'https://www.instagram.com/otherdance' target="_blank" rel="noopener noreferrer">
                    <span className='fa fa-instagram'>
                    </span>
                </a>
            </h3>
            <h3 className = 'mail'>
                <a href = 'mailto:samstonedance@gmail.com'>
                    <span className='fa fa-envelope-o'>
                    </span>
                </a>
            </h3>
            <h3 className = 'facebook'>
                <a href = 'https://www.facebook.com/Sam-Stone-Dance-108382910851063' target="_blank" rel="noopener noreferrer">
                    <span className='fa fa-facebook'>
                    </span>
                </a>
            </h3>
            <h3 className = 'youtube'>
                <a href = 'https://www.youtube.com/channel/UCGEu46ySZPvZM4XlON77PlA?view_as=subscriber' target="_blank" rel="noopener noreferrer">
                    <span className='fa fa-youtube'>
                    </span>
                </a>
            </h3>
        </div>
    </div>
)

export default footer;
