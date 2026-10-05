import React from 'react';
import '../styles/Footer.css';

export default function Footer({ navigateTo }) {
  return (
    <footer className="footer-container">
      {/* Decorative top wave/cloud border */}
      <div className="footer-cloud-top"></div>

      <div className="footer-content">
        {/* Brand & Team Info */}
        <div className="footer-brand-section">
          <div className="footer-logo" onClick={() => navigateTo('home')}>
            <div className="footer-book-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                <path d="M8 7h8" />
                <path d="M8 11h6" />
              </svg>
            </div>
            <div>
              <span className="footer-title">Karatu Hub</span>
              <span className="footer-team-badge">★ Built by Masu Mafarki</span>
            </div>
          </div>
          <p className="footer-tagline">
            Bridging literacy and knowledge gaps across Nigeria by translating the school curriculum from English into native local languages.
          </p>
          <div className="footer-pilot-tag">
            <span className="dot pulse"></span> Pilot Language: <strong>Hausa (Sabi da Karatu)</strong>
          </div>
        </div>

        {/* Quick Navigation Links */}
        <div className="footer-links-column">
          <h4 className="footer-heading">Explore</h4>
          <ul className="footer-links">
            <li><button onClick={() => navigateTo('home')}>Home Overview</button></li>
            <li><button onClick={() => navigateTo('hausa')}>Hausa Pioneer Phase</button></li>
            <li><button onClick={() => navigateTo('mission')}>Our Mission & Vision</button></li>
            <li><button onClick={() => navigateTo('team')}>Masu Mafarki (The Team)</button></li>
            <li><button onClick={() => navigateTo('contact')}>Get Involved / Join Waitlist</button></li>
          </ul>
        </div>

        {/* Audience Focus */}
        <div className="footer-links-column">
          <h4 className="footer-heading">For Our Hub</h4>
          <div className="footer-audience-tags">
            <span className="aud-tag tag-yellow">👩‍🏫 Teachers</span>
            <span className="aud-tag tag-blue">🎒 Kids</span>
            <span className="aud-tag tag-orange">⚡ Teenagers</span>
          </div>
          <p className="footer-note">
            Fun and colorful for children, relatable and non-cringe for teens, and structured for educators.
          </p>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Karatu Hub by <strong>Masu Mafarki</strong>. All rights reserved. 🇳🇬</p>
        <div className="footer-doodles">
          <span className="sparkle">✦</span>
          <span className="cloud">☁</span>
          <span className="star">★</span>
        </div>
      </div>
    </footer>
  );
}