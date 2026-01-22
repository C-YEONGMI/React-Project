import React, { useState } from 'react';
import CharacterList from './content/CharacterList';
import { CharacterData } from './content/CharacterData';
import SearchFilter from './SearchFilter/SearchFilter';


const Index = () => {
  const [displayData,setDisplayData] = useState(CharacterData)
  return (
    <section className="sub-page characters"> 
      <div className="inner">
        <SearchFilter setDisplayData={setDisplayData}/>
        <CharacterList data={displayData} />
      </div>
    </section>
  );
};

export default Index;
