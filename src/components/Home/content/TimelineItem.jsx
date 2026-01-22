import React from 'react';

const TimelineItem = ({ title, desc, image, direction }) => {
  const isLeft = direction === 'left';

  return (
    <div className={`timeline-item ${isLeft ? 'left-img' : 'right-img'}`}>

      {/* 왼쪽 이미지 */}
      {isLeft && (
        <div className="img-area">
          <div className="img-wrapper">
            <img src={image} alt={title} />
          </div>
        </div>
      )}

      <div className="line-dot"></div>

      {/* 텍스트 영역 */}
      <div className="title">
        <h3>{title}</h3>
        <p className="desc-box">{desc}</p>
      </div>

      {/* 오른쪽 이미지 */}
      {!isLeft && (
        <div className="img-area">
          <div className="img-wrapper">
            <img src={image} alt={title} />
          </div>
        </div>
      )}

    </div>
  );
};

export default TimelineItem;
