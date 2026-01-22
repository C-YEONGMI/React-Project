import React from 'react';
import "./style.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="inner">
        <div className="footer-info">
          <h2 className="logo-main"><img src="/images/bt-logo.png" alt="logo" /></h2>
          <span className="logo-sub">A drawing book of figures</span>
          <p className="desc">
            이 사이트는 드라마 &lt;폭싹 속았수다&gt;를 기억하고 기록하기 위한<br />
            비상업적 아카이빙 프로젝트 입니다.
          </p>
        </div>

        <div className="footer-nav">
        </div>

        <div className="copy-area">
          <span className="copy">© Netflix Korea Non-commercial fan project</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;