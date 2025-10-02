import React from 'react';
import { Link } from 'react-router-dom';
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
                I'm <span className="highlight">{basics.name}</span>
              </h2>
              <p className="hero-description">{basics.summary}</p>
              <p className="hero-location">
                <i className="fas fa-map-marker-alt"></i>
                {basics.location.region}
              </p>
              
              <div className="hero-buttons">
                <Link to="/about" className="btn btn-primary">
                  Learn More About Me
                </Link>
                <Link to="/path" className="btn btn-secondary">
                  View My Path
                </Link>
              </div>
              
              <div className="social-links">
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
            </div>
            
            <div className="hero-image">
              <img 
                src={basics.picture} 
                alt={basics.name}
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="quick-intro">
        <div className="container">
          <h2>Quick Introduction</h2>
          <div className="intro-grid">
            <div className="intro-card">
              <h3>Software Engineer</h3>
              <p>Passionate about building scalable backend systems and innovative solutions</p>
            </div>
            <div className="intro-card">
              <h3>Entrepreneur Mindset</h3>
              <p>Always thinking about how technology can solve real-world problems</p>
            </div>
            <div className="intro-card">
              <h3>Continuous Learner</h3>
              <p>Constantly exploring new technologies and improving my skills</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
