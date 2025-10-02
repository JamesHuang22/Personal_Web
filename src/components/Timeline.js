import React from 'react';
import TimelineItem from './TimelineItem';
import TimelineHeader from './TimelineHeader';
import resumeData from '../data/resume.json';

function Timeline() {
  // Get unique years from work experience
  const years = resumeData.work
    .map(item => new Date(item.startDate).getFullYear())
    .filter((value, index, self) => self.indexOf(value) === index)
    .sort((a, b) => b - a); // Sort in descending order

  return (
    <div className="timeline">
      <header className="timeline-header">
        <span className="tag">
          {new Date().getFullYear()}
        </span>
      </header>
      <div className="timeline-item">
        <div className="timeline-marker is-success"></div>
        <div className="timeline-content"></div>
      </div>
      
      {years.map((year, i) => {
        const yearItems = resumeData.work.filter(
          work => new Date(work.startDate).getFullYear() === year
        );
        
        return (
          <React.Fragment key={i}>
            <TimelineHeader year={year} />
            {yearItems.map((item, j) => (
              <TimelineItem
                key={j}
                date={new Date(item.startDate).toLocaleString("en-US", {
                  month: "long",
                  year: "numeric"
                })}
                company={item.company}
                position={item.position}
                summary={item.summary}
                website={item.website}
              />
            ))}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default Timeline;
