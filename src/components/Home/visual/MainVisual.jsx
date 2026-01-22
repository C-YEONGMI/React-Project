import './banner.css';
const MainVisual = () => {
  return (
    <section className="main-visual">
      <div className="visual-bg">
        <div className="visual-text-box">
          <p className="main-banner-img"></p>
          <p className="overimg">
            <img src="/images/banner-text.png" alt="" />
          </p>
          <h2 className="main-title">
            <img src="/images/banner-text2.png" alt="" />
          </h2>
        </div>
      </div>
    </section>
  );
};

export default MainVisual;