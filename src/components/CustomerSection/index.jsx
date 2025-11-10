import React from 'react';
import './CustomerSection.css';

const CUSTOMER_LOGOS = [
  'Autodesk', 'Dolby', 'Smartling', 'Redis', 'Anthropic', 'DocuSign'
];

export const CustomerSection = ({ statsRef }) => {
  return (
    <div className="customer-block">
      <div className="customers-logos">
        {CUSTOMER_LOGOS.map((logo) => (
          <span key={logo} className="logo-pill">{logo}</span>
        ))}
      </div>

      <div className="testimonial-row">
        <div className="testimonial-quote">
          <blockquote>
            "Every rep is more productive with Apollo. We booked 75% more meetings while cutting manual work in half."
          </blockquote>
        </div>
        <div className="testimonial-meta">
          <div className="meta-inner">
            <div className="meta-name">Andrew Froning</div>
            <div className="meta-role">Dir, Leader — Cyera</div>
          </div>
        </div>
      </div>

      <div className="stats-cards" ref={statsRef}>
        <article className="stat-card">
          <div className="stat-note">70% increase in sales leads</div>
          <div className="stat-value">70%</div>
        </article>
        <article className="stat-card">
          <div className="stat-note">4X SDR efficiency</div>
          <div className="stat-value">4x</div>
        </article>
        <article className="stat-card">
          <div className="stat-note">64% lower tech stack costs</div>
          <div className="stat-value">64%</div>
        </article>
      </div>
    </div>
  );
};