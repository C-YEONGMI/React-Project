import React from 'react';
import './style.css';
import Navi from './Navi';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <>
        <header id="header">
        <div className="inner">
          <h1 className="logo">
            <Link to="/">
            <img src="/images/logo.png" alt="폭싹 속았수다"/>
          </Link>
          </h1>
          <Navi/>
        </div>
      </header>
    </>
  );
};

export default Header;