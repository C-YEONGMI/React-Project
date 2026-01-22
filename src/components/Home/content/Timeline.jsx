import React from 'react';
import './timeline.css';
import TimelineItem from './TimelineItem';
import { timelineData } from './timelineData';

const Timeline = () => {
  return (
    <section className="timeline-section">
      <div className="inner">

        <div className="vertical-line-container">
        <div className="vertical-line"></div>
        </div>

        {/* 타임라인 반복 map처리 */}
        {timelineData.map((item) => (
          <TimelineItem
            key={item.id}
            title={item.title}
            desc={item.desc}
            image={item.image}
            direction={item.direction}
          />
        ))}
      </div>
    </section>
  );
};

export default Timeline;
