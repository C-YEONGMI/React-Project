
import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';
const Navi = () => {
  return (
          <nav className="nav">
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/story">Story</NavLink></li>
              <li><NavLink to="/characters">Characters</NavLink></li>
              <li><NavLink to="/board">Board</NavLink></li>
              
            </ul>
          </nav>
  );
};

export default Navi;