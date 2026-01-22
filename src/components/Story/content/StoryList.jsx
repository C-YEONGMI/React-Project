import React from "react";

import StoryItem from "./StoryItem";
import './style.css';

const StoryList = ({ data }) => {
  return (
    <section className="story-section">
    <ul className="story-list">
      {data.map(item => (
        <StoryItem key={item.id} {...item} />
      ))}
    </ul>

 <div className="story-divider">
  <span className="line"></span>
</div>
    <div className="summary-text">
  이 드라마는 결국,<br/>“한 세대가 다음 세대를 위해 무엇을 감내했는가”에 대한 이야기다.
    </div>
    </section>
  );
};

export default StoryList;