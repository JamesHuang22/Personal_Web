import React from 'react';
import TimelineItem from './TimelineItem';
import TimelineHeader from './TimelineHeader';
import resumeData from '../data/resume.json';

function Timeline() {
  // Include all work experience items
  const workItems = resumeData.work;

  // Get unique years from all work experience
  const years = workItems
    .map(item => new Date(item.startDate).getFullYear())
    .filter((value, index, self) => self.indexOf(value) === index)
    .sort((a, b) => b - a); // Sort in descending order

  return (
    <div className="timeline">
      {years.map((year, i) => {
        const yearItems = workItems.filter(
          work => new Date(work.startDate).getFullYear() === year
        );
        
        return (
          <React.Fragment key={i}>
            <TimelineHeader year={year} />
            {yearItems.map((item, j) => {
              // Check if this is the current position (no endDate)
              const isCurrent = !item.endDate || item.endDate === "";
              
              return (
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
                  isCurrent={isCurrent}
                />
              );
            })}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default Timeline;
