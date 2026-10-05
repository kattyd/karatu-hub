import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChalkboardTransition from './components/ChalkboardTransition';
import Home from './pages/Home';
import HausaLaunch from './pages/HausaLaunch';
import Mission from './pages/Mission';
import { Team } from './pages/Team';
import './styles/global.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [pendingPage, setPendingPage] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNavigate = (targetPage) => {
    if (targetPage === currentPage || isTransitioning) return;
    setPendingPage(targetPage);
    setIsTransitioning(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTransitionComplete = () => {
    if (pendingPage) {
      setCurrentPage(pendingPage);
      setPendingPage(null);
    }
    setIsTransitioning(false);
  };

  return (
    <div className="app-main" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar activePage={currentPage} navigateTo={handleNavigate} />
      
      <ChalkboardTransition 
        isTransitioning={isTransitioning} 
        onComplete={handleTransitionComplete} 
      />

      <main style={{ flex: 1 }}>
        {currentPage === 'home' && <Home navigateTo={handleNavigate} />}
        {currentPage === 'hausa' && <HausaLaunch />}
        {currentPage === 'mission' && <Mission />}
        {currentPage === 'team' && <Team />}
        {currentPage === 'contact' && <Mission />} {/* Reuse or add contact component */}
      </main>

      <Footer navigateTo={handleNavigate} />
    </div>
  );
}