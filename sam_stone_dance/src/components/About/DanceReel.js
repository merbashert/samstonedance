import React from 'react'

import './DanceReel.css'

const danceReel = () => {

        return(
            <div className = 'dance-reel'>
            <iframe title='dance_reel' width="840" height="505" id='youtube' src="https://www.youtube.com/embed/jhMEFpUtJhs" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        )

}

export default danceReel;
