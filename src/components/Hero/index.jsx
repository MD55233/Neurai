import React from 'react';
import './Hero.css';

export const Hero = () => {
  return (
    <div className="hero-container">
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
  );
};