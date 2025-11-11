import React from 'react';

export const DesktopHeader = () => {
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
          <a href="#" className="login-link">Log in</a>
          <button className="demo-button">Get a demo</button>
          <button className="signup-button">Sign up for free</button>
        </div>
      </div>
    </header>
  );
};

export const MobileHeader = ({ onToggleDrawer }) => {
  return (
    <header className="header mobile-header">
      <div className="header-content">
        <img src="logo neurai.svg" alt="NeurAI" className="logo" />
        <img src="NEUR AI BLACK FONT WITHOUT ICON.png" alt="NeurAI" className="logotext" />
        <button className="menu-button" onClick={onToggleDrawer}>
          <span className="menu-icon"></span>
        </button>
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