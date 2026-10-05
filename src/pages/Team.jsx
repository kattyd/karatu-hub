
import React from 'react';
import '../styles/pages.css';
export function Team() {
  return (
    <div className="page-container">
      <div className="page-header">
        <span className="badge badge-yellow">The Creators</span>
        <h1>Meet "Masu Mafarki" (The Dreamers)</h1>
        <p>We are a team of passionate educators, technologists, and linguists aiming to transform education across Nigeria.</p>
      </div>
      <div className="team-grid">
        <div className="team-card">
          <div className="avatar">🌟</div>
          <h3>Masu Mafarki Team</h3>
          <p>Passionate about equity, native language retention, and quality learning tools.</p>
        </div>
      </div>
    </div>
  );
}