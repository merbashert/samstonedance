import React from 'react'
import moon from '../assets/moon.png'

class CurrentProjects extends React.Component {
    render () {
        return(
            <div className = 'current-projects'>
            <img src = {moon} className='moon_drop' alt='moon'></img>
            <iframe title='dance_reel' width="640" height="385" id='youtube' src="https://www.youtube.com/embed/jhMEFpUtJhs" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        )
    }
}

export default CurrentProjects;
