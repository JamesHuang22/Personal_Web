import React from 'react';

function TimelineItem({ date, company, position, summary, website, isCurrent }) {
  return (
    <div className="timeline-item">
      <div className={`timeline-marker ${isCurrent ? 'is-success' : ''}`}></div>
      <div className="timeline-content">
        <h3>
          {website ? (
            <a href={website} target="_blank" rel="noopener noreferrer">
              {company}
            </a>
          ) : (
            company
          )}
        </h3>
        {position && position.trim() !== "" && <div className="date">{position}</div>}
        <div className="date">{date}</div>
        <p>{summary}</p>
      </div>
    </div>
  );
}

export default TimelineItem;
