import React from 'react';
import '../styles/pages.css';

export default function HausaLaunch() {
  return (
    <div className="page-container">
      <div className="page-header">
        <span className="badge badge-orange">Pilot Phase</span>
        <h1>Why We Are Starting With Hausa 🇳🇬</h1>
        <p>Over 70 million people speak Hausa across West Africa. By making Hausa our pioneer curriculum language, we are opening doors for millions of students.</p>
      </div>

      <div className="roadmap-grid">
        <div className="roadmap-step">
          <span className="step-num">01</span>
          <h3>Curriculum Mapping</h3>
          <p>Aligning Primary & Secondary STEM subjects with standardized Hausa terminology.</p>
        </div>
        <div className="roadmap-step active">
          <span className="step-num">02</span>
          <h3>Translation & Review</h3>
          <p>Collaborating with Hausa linguists, native teachers, and educational experts.</p>
        </div>
        <div className="roadmap-step">
          <span className="step-num">03</span>
          <h3>Pilot Resource Hub</h3>
          <p>Releasing digital audio-visual guides, flashcards, and printable PDF workbooks.</p>
        </div>
      </div>
    </div>
  );
}