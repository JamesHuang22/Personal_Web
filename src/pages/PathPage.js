import React from 'react';
import Timeline from '../components/Timeline';
import './PathPage.css';

function PathPage() {
  return (
    <div className="path-page">
      <section className="path-hero">
        <div className="container">
          <h1>On My Way</h1>
          <p className="subtitle">
            A journey from random streets in Wuhan to World.
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
