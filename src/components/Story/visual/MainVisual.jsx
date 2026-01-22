import React from "react";
import './storybanner.css';

const MainVisual = () => {
  return (
    <section className="main-visual">
      <div className="visual-bg">
        <div className="inner">
          <div className="visual-text">
            <h2 className="title">STORY BACKGROUND</h2>
            <p className="subtitle">왜 ‘제주’였고, 왜 이렇게 살아야 했는가</p>

            <div className="desc">
              폭싹 속았수다는 단순한 가족사가 아니라,<br />
              전쟁 이후 제주에서 살아남아야 했던 사람들의 시간을 따라가는 이야기다.<br />
              이 배경을 알고 보면 인물들의 선택이 훨씬 뚜렷해진다.
            </div>

            <div className="visual-bottom">
              <span className="line"></span>
              제주에서 살아야 했던 사람들의 시간<br />
              말보다 몸이 먼저였던 시대의 기록
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainVisual;
