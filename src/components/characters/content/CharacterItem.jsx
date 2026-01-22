import React from 'react';

import '../chracters.css'


const CharacterItem = ({image, actor, name, desc, tags,category}) => {
  return (
    <li className="char-card">
      <div className="img-box">
        <img src={image} alt={name} />
      </div>

      <div className="text-box">
        <span className="sub-info">배우: {actor}</span>
        <h3 className="name">{name}</h3>
        <p className="description">{desc}</p>

        <div className="tags">
          {tags.map((tag, idx) => (
            <span className="tag" key={idx}>{tag}</span>
          ))}
        </div>
      </div>
    </li>
  );
};

export default CharacterItem;
