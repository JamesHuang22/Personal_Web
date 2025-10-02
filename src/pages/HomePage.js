import React from 'react';
import resumeData from '../data/resume.json';
import './HomePage.css';

function HomePage() {
  const { basics } = resumeData;

  return (
    <div className="home-page">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">{basics.x_title}</h1>
              <h2 className="hero-subtitle">
                Hey, I'm <span className="highlight">{basics.name}</span>
              </h2>
              <p className="hero-description">{basics.summary}</p>
              <p className="hero-location">
                <i className="fas fa-map-marker-alt"></i>
                {basics.location.region}
              </p>
              
              <p className="hero-mambe">
                <a 
                  href="https://www.youtube.com/watch?v=4gi9y3sTrXE" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mambe-link"
                >
                  Motivated by Mamba mentality
                </a>
              </p>
              
            </div>
          </div>
        </div>
      </section>
      
      <section className="jameshuang-section">
        <div className="social-links-jameshuang">
          {basics.profiles.map((profile, index) => (
            <a
              key={index}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title={profile.network}
            >
              <i className={profile.x_icon}></i>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
