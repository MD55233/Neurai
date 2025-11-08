import { useState } from 'react';
import Drawer from './Drawer';
import './App.css';

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
        </div>
      </main>
    </div>
  );
}

export default App;
