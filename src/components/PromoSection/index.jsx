import React from 'react';
import './PromoSection.css';

const PromoSection = () => {
  return (
    <section className="promo-section">
      <div className="promo-card">
        <div className="promo-content">
          <h2 className="promo-title">The best AI sales platform in the world, at a price you just can’t beat</h2>
          <p className="promo-desc">You don't have to spend a fortune to run a world-class revenue-generating machine. Replace ZoomInfo, Outreach, Salesloft, Gong, Chili Piper, and more with Apollo to save a fortune and get better results.</p>

          <div className="promo-cta">
            <button className="promo-btn promo-btn-primary">See pricing</button>
            <button className="promo-btn promo-btn-outline">Sign up for free</button>
          </div>
        </div>

        <div className="promo-image" aria-hidden="true">
          <img src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=6a1d67e8b6b2b1ea6f2a7366f3b6f4d9" alt="People collaborating" />

          {/* SVG overlay draws the white divider lines that create the pentagon-like edge */}
          <svg className="promo-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <polyline points="18,0 36,50 18,100" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeOpacity="0.95" strokeLinecap="round" />
            <line x1="36" y1="50" x2="100" y2="50" stroke="#ffffff" strokeWidth="1.2" strokeOpacity="0.8" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
