import React from 'react';
import "../contents.css";

const BoardBanner = () => {
  return (
    <section className="main-visual">
      <div className="visual-bg">
        <div className="visual-text-box">
          <p className="main-banner-img"></p>
          <p className="overimg"><img src="/images/banner-text.png" alt="text" /></p>
          <h2 className="main-title"><img src="/images/banner-text2.png" alt="title" /></h2>
        </div>
      </div>
    </section>
  );
};

export default BoardBanner;