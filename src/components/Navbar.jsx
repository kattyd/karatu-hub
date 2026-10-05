import React from 'react';
import '../styles/Navbar.css';

export default function Navbar({ activePage, navigateTo }) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'hausa', label: 'Hausa Pioneer' },
    { id: 'mission', label: 'Our Mission' },
    { id: 'team', label: 'Masu Mafarki' },
    { id: 'contact', label: 'Get Involved' },
  ];

  return (
    <nav className="navbar">
      {/* Brand Logo & Masu Mafarki Badge */}
      <div className="nav-brand" onClick={() => navigateTo('home')}>
        <div className="lopsided-book-icon">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            <path d="M8 7h8" />
            <path d="M8 11h6" />
          </svg>
        </div>
        <div className="brand-text">
          <span className="brand-title">Karatu Hub</span>
          <span className="team-tag">
            <span className="star-icon">★</span> by Masu Mafarki
          </span>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="nav-links">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`nav-btn ${activePage === item.id ? 'active' : ''}`}
            onClick={() => navigateTo(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Hausa Pilot Flag */}
      <div className="hausa-flag-badge">
         Hausa Phase 1
      </div>
    </nav>
  );
}