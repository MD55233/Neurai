import React from 'react';
import './FeaturesSection.css';

export const FeaturesSection = ({ featuresRef }) => {
  return (
    <div className="features-section">
      <h2>Everything you need, from finding leads to winning deals</h2>
      <p className="features-subtitle">
        Powered by Apollo Data — one of the largest, most accurate business data networks on the planet.
      </p>
      
      <div className="features-grid" ref={featuresRef}>
        <div className="feature-card">
          <div className="feature-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 10L19 14M19 14L15 18M19 14H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3>Outbound</h3>
          <p>Book more meetings faster with better data, smarter AI, and easier automation.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 14L5 10M5 10L9 6M5 10H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3>Inbound</h3>
          <p>Capture, qualify, and route every lead instantly so hot leads never go cold.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M7 12H17M17 12L13 8M17 12L13 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3>Data Enrichment</h3>
          <p>Cleanse and complete your records with always-fresh data that powers smarter targeting.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M7 12H17M17 12L13 8M17 12L13 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3>Marketplace</h3>
          <p>Access a wide range of integrations and tools to enhance your workflow.</p>
        </div>
      </div>
    </div>
  );
};