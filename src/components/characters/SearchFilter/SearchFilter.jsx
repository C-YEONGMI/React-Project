import React, { useRef, useState } from 'react';
import { CharacterData } from '../content/CharacterData';
import './SearchFilter.css';



const SearchFilter = ({setDisplayData}) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const inputRef = useRef();


// 검색기능
  const onSearch = () => {
    const word = inputRef.current.value;
    const result = CharacterData.filter(item => item.name.includes(word));
    setDisplayData(result);
  };

  // 엔터키로도 실행되도록
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') { // 누른 키가 'Enter'인지 확인
      onSearch(); // 맞다면 검색 함수 실행
    };
  
  };

  //필터정렬기능
  const Sort=(e)=>{
    const type = e.target.value;
    const sorted = [...CharacterData].sort((a,b)=>{
      if (type === 'name') return a.name.localeCompare(b.name);
      if (type === 'age') return b.age - a.age;
      return 0;
    });
    setDisplayData(sorted);
  };

// 카테고리 필터기능
  const FilterCategory = (categoryName) => {
    setActiveCategory(categoryName);

    if(categoryName === 'all'){
      setDisplayData(CharacterData);
    }else{
      const result = CharacterData.filter(item => item.category === categoryName)
      setDisplayData(result);
    }
  };


  return (
    <div className="search-filter-wrap">
      {/* 타이틀 영역 */}
      <div className="sub-header">
        <p className="sub-title">a drawing book of figures</p>
        <h2 className="main-title">‘폭싹 속았수다’ 인물</h2>
      </div>

      {/* 카테고리 탭 */}
      <nav className="filter-nav">
        <ul className="menu-list">
          <li className={`menu-item ${activeCategory === 'all' ? 'active' : ''}`}><button onClick={()=>FilterCategory('all')}>전체</button></li>
          <li className={`menu-item ${activeCategory === 'kwansik' ? `active` : ''}`}><button onClick={()=>FilterCategory('kwansik')}>관식의사람들</button></li>
          <li className={`menu-item ${activeCategory === 'aesoon' ? `active` : ''}`}><button onClick={()=>FilterCategory('aesoon')}>애순의사람들</button></li>
        </ul>
      </nav>

      {/* 검색 및 정렬 바 */}
      <div className="search-bar-area">
        <div className="search-input-wrap">
          <input type="text" ref={inputRef} placeholder="이름으로 검색" onKeyDown={handleKeyDown} />
          <button className="btn-search" onClick={onSearch}>검색</button>
        </div>
        <select id="sort-select" onChange={Sort}>
          <option value="name">이름순</option>
          <option value="age">나이순</option>
        </select>
      </div>
    </div>
  );
};

export default SearchFilter;