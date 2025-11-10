import React from 'react';
import './VideoBanner.css';
import heroVideo from '../../assets/video/homepage-hero.510b8371.webm';

const VideoBanner = () => {
  return (
    <section className="video-banner">
      <div className="video-card">
        <video className="video-bg" src={heroVideo} autoPlay muted loop playsInline />
       
        
        
      </div>
    </section>
  );
};

export default VideoBanner;
