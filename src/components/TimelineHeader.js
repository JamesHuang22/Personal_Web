import React from 'react';

function TimelineHeader({ year }) {
  return (
    <header className="timeline-header">
      <span className="tag">
        {year}
      </span>
    </header>
  );
}

export default TimelineHeader;
