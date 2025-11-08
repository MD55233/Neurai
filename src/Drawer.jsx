import React from 'react';
import './drawer.css';

function Drawer({ isOpen, onClose }) {
    return (
        <>
            <div className={`drawer ${isOpen ? 'is-open' : ''}`}>
                <div className="drawer-content">
                    <button className="drawer-close" onClick={onClose}>&times;</button>
                    <nav className="drawer-nav">
                        <a href="#" onClick={onClose}>Solutions</a>
                        <a href="#" onClick={onClose}>Roles</a>
                        <a href="#" onClick={onClose}>Resources</a>
                        <a href="#" onClick={onClose}>Pricing</a>
                    </nav>
                    <div className="drawer-buttons">
                        <a href="#" className="drawer-link">Log in</a>
                        <button className="demo-button">Get a demo</button>
                        <button className="signup-button">Sign up for free</button>
                    </div>
                </div>
            </div>
            {isOpen && <div className="drawer-overlay" onClick={onClose}></div>}
        </>
    );
}

export default Drawer;
