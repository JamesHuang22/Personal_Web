import React from 'react';
import resumeData from '../data/resume.json';
import './AboutPage.css';

function AboutPage() {
  const { basics, education, skills } = resumeData;

  const getSkillLevel = (level) => {
    switch (level) {
      case 'Advanced': return { width: '90%', color: '#28a745' };
      case 'Intermediate': return { width: '70%', color: '#ffc107' };
      case 'Basic': return { width: '50%', color: '#dc3545' };
      default: return { width: '50%', color: '#6c757d' };
    }
  };

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              <img 
                src={basics.picture} 
                alt={basics.name}
                className="profile-image"
              />
            </div>
            <div className="about-text">
              <h1>About Me</h1>
              <h2>{basics.name}</h2>
              <p className="title">{basics.label}</p>
              <p className="summary">{basics.summary}</p>
              <p className="location">
                <i className="fas fa-map-marker-alt"></i>
                {basics.location.region}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="education-section">
        <div className="container">
          <h2>Education</h2>
          <div className="education-card">
            <h3>{education[0].institution}</h3>
            <p className="degree">{education[0].studyType} in {education[0].area}</p>
            <p className="dates">
              {new Date(education[0].startDate).getFullYear()} - {new Date(education[0].endDate).getFullYear()}
            </p>
            <div className="courses">
              <h4>Key Courses:</h4>
              <ul>
                {education[0].courses.map((course, index) => (
                  <li key={index}>{course}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="skills-section">
        <div className="container">
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => {
              const levelStyle = getSkillLevel(skill.level);
              return (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className={`skill-level skill-level-${skill.level.toLowerCase()}`}>
                      {skill.level}
                    </span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress"
                      style={{ 
                        width: levelStyle.width,
                        backgroundColor: levelStyle.color
                      }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <h2>Get In Touch</h2>
          <p>I'm always interested in new opportunities and collaborations.</p>
          <div className="contact-links">
            {basics.profiles.map((profile, index) => (
              <a
                key={index}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <i className={profile.x_icon}></i>
                <span>{profile.network}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
