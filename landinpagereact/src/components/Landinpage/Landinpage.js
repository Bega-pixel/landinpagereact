import React from 'react';
import './Landinpage.css';
import Bgvideo from '../../video/3160550685.mp4';

const Landinpage = () => {
  return (
    <div className='landingpage-container'>
        <video src={Bgvideo} autoPlay muted loop className="video-bg" />
        
        <div className="bg-overaly"></div>
        
        <div className="navbar">
          <div className="menu">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div className="home-text">
          <h1>Lost at white paradise</h1>
          <p>Come and join us!</p>
        </div>

        <div className='home-btn'>Explore</div>

    </div>
  )
}

export default Landinpage
