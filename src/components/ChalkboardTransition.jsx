import React, { useEffect, useState } from 'react';
import '../styles/Chalkboard.css';

export default function ChalkboardTransition({ isTransitioning, onComplete }) {
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        onComplete();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning, onComplete]);

  if (!isTransitioning) return null;

  return (
    <div className="chalkboard-overlay">
      <div className="chalkboard-surface">
        <div className="chalk-dust-particles"></div>
        <div className="duster-wiper">
          <div className="duster-handle">KARATU HUB</div>
          <div className="duster-felt"></div>
        </div>
        <div className="chalk-quote">
          "Ilimi Hasken Rayuwa" <span>(Knowledge is the Light of Life)</span>
        </div>
      </div>
    </div>
  );
}