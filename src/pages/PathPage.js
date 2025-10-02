import React from 'react';
import Timeline from '../components/Timeline';
import './PathPage.css';

function PathPage() {
  return (
    <div className="path-page">
      <section className="path-hero">
        <div className="container">
          <h1>My Professional Path</h1>
          <p className="subtitle">
            A journey through my career experiences, education, and growth as a software engineer
          </p>
        </div>
      </section>

      <section className="timeline-section">
        <div className="container">
          <Timeline />
        </div>
      </section>
    </div>
  );
}

export default PathPage;
