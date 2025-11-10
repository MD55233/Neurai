import { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CustomerSection } from './components/CustomerSection';
import { FeaturesSection } from './components/FeaturesSection';

import Drawer from './Drawer';
import './App.css';

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const statsRef = useRef(null);
  const featuresRef = useRef(null);

  

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



  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="app-container">
        <Header onToggleDrawer={toggleDrawer} />
      <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer} />
      
      <main className="main-content">
        <div className="content-container">
          <Hero />
          <CustomerSection statsRef={statsRef} />

          <FeaturesSection featuresRef={featuresRef} />
        </div>
      </main>
    </div>
  );
}

export default App;
