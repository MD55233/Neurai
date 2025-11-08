import { useState, useEffect, useRef } from 'react';
import Drawer from './Drawer';
import './App.css';

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const statsRef = useRef(null);
  const featuresRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);
  const panelRefs = useRef([]);
  const [drawerIndex, setDrawerIndex] = useState(null);

  const scrollToPanel = (i) => {
    const el = panelRefs.current[i];
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const toggleDrawer = (i) => {
    setDrawerIndex(prev => (prev === i ? null : i));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const cards = entry.target.querySelectorAll('.stat-card, .feature-card');
          cards.forEach((card, index) => {
            setTimeout(() => {
              if (entry.isIntersecting) {
                card.classList.remove('hidden');
                card.classList.add('visible');
              } else {
                card.classList.remove('visible');
                card.classList.add('hidden');
              }
            }, index * 100);
          });
        });
      },
      {
        threshold: 0.5,
        rootMargin: '-10px'
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Observe the slides container to apply sticky behavior
    const containerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.target.classList.contains('slides-container')) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view');
          }
        }
      },
      { threshold: 0.1 }
    );

    // Observe panels for active state and visibility
    // NOTE: avoid changing layout (position/pointerEvents) in JS — keep it CSS-driven.
    const panelObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const idx = Number(entry.target.dataset.index);
        if (entry.isIntersecting) {
          setActiveTab(idx);
          entry.target.classList.add('visible');
          entry.target.classList.remove('hidden');
        } else {
          entry.target.classList.remove('visible');
          entry.target.classList.add('hidden');
        }
      });
    }, { 
      // tune so a panel becomes active when roughly centered in view
      threshold: 0.6,
      rootMargin: '-20% 0px -35% 0px'
    });

    // Observe both the container and panels
    const container = document.querySelector('.slides-container');
    if (container) {
      containerObserver.observe(container);
    }

    // observe any panels collected in refs
    panelRefs.current.forEach((p) => { if (p) panelObserver.observe(p); });

    return () => panelObserver.disconnect();
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="app-container">
      {/* Desktop Header */}
      <header className="header desktop-header">
        <div className="header-content">
          <div className="header-left">
            <img src="NEUR AI ONLY ICON.png" alt="Neru" className="logo" />
              <img src="NEUR AI BLACK FONT WITHOUT ICON.png" alt="AI" className="logo" />
            <nav className="nav-links">
              <a href="#">Solutions</a>
              <a href="#">Roles</a>
              <a href="#">Resources</a>
              <a href="#">Pricing</a>
            </nav>
          </div>
          <div className="header-right">
            <a href="#" className="login-link">Log in</a>
            <button className="demo-button">Get a demo</button>
            <button className="signup-button">Sign up for free</button>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="header mobile-header">
        <div className="header-content">
          <img src="NEUR AI ONLY ICON.png" alt="Neru" className="logo" />
              <img src="NEUR AI BLACK FONT WITHOUT ICON.png" alt="AI" className="logo" />
          <button className="menu-button" onClick={toggleDrawer}>
            <span className="menu-icon"></span>
          </button>
        </div>
      </header>

      <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
      
      <main className="main-content">
        <div className="hero-container">
          <h1>The AI sales platform for smarter, faster revenue growth</h1>
          <p className="subtitle">Build pipeline smarter, close deals faster, and simplify your tech stack with a unified platform built for modern sales and marketing teams.</p>
          
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
              <span>or</span>
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
          </div>

            {/* Customers / Testimonial / Stats (moved inside white container) */}
            <div className="customer-block">
              <div className="customers-logos">
                <span className="logo-pill">Autodesk</span>
                <span className="logo-pill">Dolby</span>
                <span className="logo-pill">Smartling</span>
                <span className="logo-pill">Redis</span>
                <span className="logo-pill">Anthropic</span>
                <span className="logo-pill">DocuSign</span>
              </div>

              <div className="testimonial-row">
                <div className="testimonial-quote">
                  <blockquote>
                    “Every rep is more productive with Apollo. We booked 75% more meetings while cutting manual work in half.”
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
                        <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3>Deal Execution</h3>
                    <p>Keep deals moving with AI-powered prep, meeting insights, and follow-up.</p>
                  </div>
                </div>
              </div>

              {/* Fixed navigation tabs + slide panels */}
              <div className="slides-container">
                <nav className="fixed-tabs">
                  <div className="tab-buttons">
                    <button className={`nav-tab ${activeTab === 0 ? 'active' : ''}`} onClick={() => scrollToPanel(0)}>Outbound</button>
                    <button className={`nav-tab ${activeTab === 1 ? 'active' : ''}`} onClick={() => scrollToPanel(1)}>Inbound</button>
                    <button className={`nav-tab ${activeTab === 2 ? 'active' : ''}`} onClick={() => scrollToPanel(2)}>Data Enrichment</button>
                    <button className={`nav-tab ${activeTab === 3 ? 'active' : ''}`} onClick={() => scrollToPanel(3)}>Deal Execution</button>
                  </div>
                </nav>

                <div className="slides-wrapper">
                  <div className="slides-track">
                    <div ref={el => (panelRefs.current[0] = el)} data-index={0} className="slide hidden">
                      <div className="slide-content">
                        <div className="slide-text">
                          <h2>Outbound</h2>
                          <p>Book more meetings faster with better data, smarter AI, and easier automation.</p>
                          <button className="demo-button">See Outbound</button>
                        </div>
                        <div className="slide-visual">
                          <div className="slide-screenshot">[Image]</div>
                        </div>
                      </div>
                    </div>

                    <div ref={el => (panelRefs.current[1] = el)} data-index={1} className="slide hidden">
                      <div className="slide-content">
                        <div className="slide-text">
                          <h2>Inbound</h2>
                          <p>Capture, qualify, and route every lead instantly so hot leads never go cold.</p>
                          <button className="demo-button">See Inbound</button>
                        </div>
                        <div className="slide-visual">
                          <div className="slide-screenshot">[Image]</div>
                        </div>
                      </div>
                    </div>

                    <div ref={el => (panelRefs.current[2] = el)} data-index={2} className="slide hidden">
                      <div className="slide-content">
                        <div className="slide-text">
                          <h2>Data Enrichment</h2>
                          <p>Cleanse and complete your records with always-fresh data that powers smarter targeting.</p>
                          <button className="demo-button">See Enrichment</button>
                        </div>
                        <div className="slide-visual">
                          <div className="slide-screenshot">[Image]</div>
                        </div>
                      </div>
                    </div>

                    <div ref={el => (panelRefs.current[3] = el)} data-index={3} className="slide hidden">
                      <div className="slide-content">
                        <div className="slide-text">
                          <h2>Deal Execution</h2>
                          <p>Keep deals moving with AI-powered prep, meeting insights, and follow-up.</p>
                          <button className="demo-button">See Deal Execution</button>
                        </div>
                        <div className="slide-visual">
                          <div className="slide-screenshot">[Image]</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Drawer stack: shows panels as stacked drawers when a tab is opened */}
              <div className={`drawer-stack ${drawerIndex !== null ? 'open' : ''}`} aria-hidden={drawerIndex === null}>
                <div className="drawer-overlay" onClick={() => setDrawerIndex(null)} style={{ display: drawerIndex !== null ? 'block' : 'none' }} />
                {[0,1,2,3].map(i => {
                  // compute offset so panels stack behind the active one
                  const visible = drawerIndex !== null;
                  const active = drawerIndex === i;
                  const offset = visible ? (i - (drawerIndex ?? 0)) * 36 : 1000; // large to hide
                  const transform = visible ? `translateX(${Math.max(0, offset)}px)` : `translateX(100%)`;
                  const z = 1100 + (i === drawerIndex ? 100 : i);
                  return (
                    <aside key={i}
                      className={`drawer-panel ${active ? 'front' : ''}`}
                      style={{ transform, zIndex: z }}
                      role="region"
                      aria-hidden={!active}
                    >
                      <div className="drawer-inner">
                        <div className="drawer-head">
                          <h3>{['Outbound','Inbound','Data Enrichment','Deal Execution'][i]}</h3>
                          <button className="drawer-close" onClick={() => setDrawerIndex(null)} aria-label="Close panel">×</button>
                        </div>
                        <div className="drawer-body">
                          <p>
                            {i === 0 && 'Book more meetings faster with better data, smarter AI, and easier automation.'}
                            {i === 1 && 'Convert more leads into meetings with intelligent routing and automated responses.'}
                            {i === 2 && 'Keep your data fresh and actionable with automated enrichment and verification.'}
                            {i === 3 && 'Close more deals faster with AI-powered insights and automation.'}
                          </p>
                          <div className="drawer-media">[Visual placeholder]</div>
                        </div>
                      </div>
                    </aside>
                  );
                })}
              </div>

        </div>
      </main>
    </div>
  );
}

export default App;
