import React from 'react';
import '../styles/pages.css';

export default function Home({ navigateTo }) {
  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-badge badge badge-yellow">
          ✨ Translation in Progress: Launching with Hausa
        </div>
        <h1 className="hero-title">
          Education in Your Language. <br />
          <span className="highlight-blue">Knowledge Without Barriers.</span>
        </h1>
        <p className="hero-description">
          At <strong>Karatu Hub</strong>, we are breaking down language barriers by translating the Nigerian educational curriculum into local native languages. Starting with <strong>Hausa</strong>, we ensure your ability to understand English never stops your ability to acquire knowledge.
        </p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={() => navigateTo('hausa')}>
            Explore Hausa Phase 1 ➔
          </button>
          <button className="btn-secondary" onClick={() => navigateTo('mission')}>
            Read Our Mission
          </button>
        </div>
      </section>

      {/* Audience Bento Grid */}
      <section className="bento-section">
        <h2 className="section-heading">Designed for Everyone in the Classroom</h2>
        <div className="bento-grid">
          
          {/* Kids Card */}
          <div className="bento-card bento-kids">
            <div className="bento-icon">🎨</div>
            <h3>For Kids</h3>
            <p>Vibrant, story-filled lessons and visual terms that make native learning exciting and easy to grasp.</p>
            <span className="mini-tag">Fun & Playful</span>
          </div>

          {/* Teenagers Card */}
          <div className="bento-card bento-teens">
            <div className="bento-icon">⚡</div>
            <h3>For Teenagers</h3>
            <p>Clean, non-cringe STEM and Humanities summaries designed to help you excel in exams using concepts you truly understand.</p>
            <span className="mini-tag">Relatable & Sharp</span>
          </div>

          {/* Teachers Card */}
          <div className="bento-card bento-teachers">
            <div className="bento-icon">📚</div>
            <h3>For Educators</h3>
            <p>Bilingual curriculum guides and classroom translation cheat sheets to help bridge learning gaps effortlessly.</p>
            <span className="mini-tag">Teaching Resource</span>
          </div>

        </div>
      </section>

      {/* Chalkboard Interactive Preview */}
      <section className="chalkboard-preview-card">
        <div className="chalkboard-header">
          <h3> Chalkboard Preview: STEM Terms in Hausa</h3>
          <p>Hover or click terms to see their curriculum translation</p>
        </div>
        <div className="chalkboard-body">
          <div className="term-chip">Mathematics ➔ <strong>Lissafi</strong></div>
          <div className="term-chip">Science ➔ <strong>Kimiyya</strong></div>
          <div className="term-chip">Biology ➔ <strong>Halittu</strong></div>
          <div className="term-chip">Geography ➔ <strong>Jografi</strong></div>
        </div>
      </section>
    </div>
  );
}