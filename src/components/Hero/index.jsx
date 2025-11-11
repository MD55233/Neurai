import React, { useEffect } from 'react';
import './Hero.css';

export const Hero = () => {
  useEffect(() => {
    const init = () => {
      if (!window.particlesJS || document.querySelector('#hero-particles canvas')) return;
      const baseConfig = {
        particles: {
          number: {
            value: 60,
            density: { enable: true, value_area: 900 }
          },
            color: { value: '#5ce1e6' },
            shape: { type: 'circle' },
            opacity: { value: 0.45 },
            size: { value: 3.2, random: true },
            line_linked: { enable: true, distance: 140, color: '#5ce1e6', opacity: 0.45, width: 1 },
            move: { enable: true, speed: 2.2, direction: 'none', out_mode: 'out' }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: { enable: true, mode: 'grab' },
            onclick: { enable: true, mode: 'push' },
            resize: true
          },
          modes: {
            grab: { distance: 180, line_linked: { opacity: 0.4 } },
            push: { particles_nb: 3 },
            repulse: { distance: 200, duration: 0.4 }
          }
        },
        retina_detect: true
      };

      const isMobile = window.matchMedia('(max-width: 640px)').matches;
      if (isMobile) {
        baseConfig.particles.number.value = 32;
        baseConfig.particles.move.speed = 1.2;
        baseConfig.particles.line_linked.distance = 120;
      }

      window.particlesJS('hero-particles', baseConfig);
    };

    if (window.particlesJS) {
      init();
    } else {
      // Retry briefly in case CDN script hasn't loaded yet
      const id = setInterval(() => {
        if (window.particlesJS) {
          clearInterval(id);
          init();
        }
      }, 200);
      // Stop trying after 3 seconds
      setTimeout(() => clearInterval(id), 3000);
    }
  }, []);

  return (
    <div className="hero-wrapper">
      <div className="hero-container">
        <div id="hero-particles" className="hero-particles-layer" aria-hidden="true"></div>
        <div className="hero-content">
          <h1>The AI sales platform for smarter, faster revenue growth</h1>
          <p className="subtitle">
            Build pipeline smarter, close deals faster, and simplify your tech stack with a unified platform built for modern sales and marketing teams.
          </p>
          
          <div className="signup-section">
            <div className="signup-form">
              <input 
                type="email" 
                placeholder="Enter email" 
                className="email-input" 
              />
              <button className="signup-button">Sign up for free</button>
            </div>

            <div className="alternative-signup">
              <div className="or-line"><span>or</span></div>
              <div className="social-buttons">
                <button className="social-button google-signup">
                  <img src="/google.svg" alt="Google" />
                  <span>Sign up with Google</span>
                </button>
                <button className="social-button microsoft-signup">
                  <img src="/microsoft-svgrepo-com.svg" alt="Microsoft" />
                  <span>Sign up with Microsoft</span>
                </button>
              </div>
            </div>

            <p className="hero-terms">By signing up, I agree to Apollo's <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.</p>
          </div>
        </div>
      </div>
    </div>
  );
};