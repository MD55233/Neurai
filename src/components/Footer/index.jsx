import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner container">
        <div className="footer-left">
          <img src="logo neurai.svg" alt="NeurAI" className="footer-logo" />
          <div className="copyright">NeurAI © {new Date().getFullYear()}</div>
        </div>

        <div className="footer-grid">
          <div className="footer-col">
            <h4>Get started</h4>
            <ul>
              <li>Sign up for free</li>
              <li>Pricing</li>
              <li>Request a demo</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Solutions</h4>
            <ul>
              <li>Outbound</li>
              <li>Inbound</li>
              <li>Data Enrichment</li>
              <li>Deal Execution</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li>Apollo Academy</li>
              <li>Insights</li>
              <li>Partners</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
