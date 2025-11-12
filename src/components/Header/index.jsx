import React from 'react';
import { useTheme } from '../../context/ThemeContext';

export const DesktopHeader = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="header desktop-header">
      <div className="header-content">
        <div className="header-left">
          {/* show icon-only logo */}
          <img src="logo neurai.svg" alt="NeurAI" className="logo" />
          <div className="header-text" >NeurAI</div>  
                  <nav className="nav-links">
            <a href="#">Solutions</a>
            <a href="#">Roles</a>
            <a href="#">Resources</a>
            <a href="#">Pricing</a>
          </nav>
        </div>
        <div className="header-right">
          <button 
            onClick={toggleTheme}
            className="theme-toggle-pro"
            aria-label="Toggle theme"
          >
            <div className="toggle-track">
              <div className={`toggle-thumb ${isDark ? 'dark' : 'light'}`}>
                {isDark ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                  </svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="5"/>
                    <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2"/>
                    <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2"/>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2"/>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2"/>
                    <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2"/>
                    <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2"/>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2"/>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                )}
              </div>
            </div>
          </button>
          <a href="#" className="login-link">Log in</a>
          <button className="demo-button">Get a demo</button>
          <button className="signup-button">Sign up for free</button>
        </div>
      </div>
    </header>
  );
};

export const MobileHeader = ({ onToggleDrawer }) => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="header mobile-header">
      <div className="header-content">
        <img src="logo neurai.svg" alt="NeurAI" className="logo" />
        <img src="NEUR AI BLACK FONT WITHOUT ICON.png" alt="NeurAI" className="logotext" />
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <button 
            onClick={toggleTheme}
            className="theme-toggle-pro mobile"
            aria-label="Toggle theme"
          >
            <div className="toggle-track">
              <div className={`toggle-thumb ${isDark ? 'dark' : 'light'}`}>
                {isDark ? (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                  </svg>
                ) : (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="5"/>
                    <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2"/>
                    <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2"/>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2"/>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2"/>
                    <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2"/>
                    <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2"/>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2"/>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                )}
              </div>
            </div>
          </button>
          <button className="menu-button" onClick={onToggleDrawer}>
            <span className="menu-icon"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

// Convenience wrapper used by App.jsx — renders both desktop and mobile headers.
export const Header = ({ onToggleDrawer }) => {
  return (
    <>
      <DesktopHeader />
      <MobileHeader onToggleDrawer={onToggleDrawer} />
    </>
  );
};