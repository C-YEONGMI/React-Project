import React from 'react';
import CharacterItem from './CharacterItem';


const CharacterList = ({ data }) => {
  return (
    <ul className="grid-container">
      {data.map((item) => (
        <CharacterItem
          key={item.id}
         {...item}
        />
      ))}
    </ul>
  );
};

export default CharacterList;
