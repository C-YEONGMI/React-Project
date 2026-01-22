import React, { useRef } from 'react'; 
import './BoardSearch.css';
import { BoardData } from '../content/BoardData';

const BoardSearch = ({ totalCount, setDisplayData, displayData }) => {
  const inputRef = useRef();

  // 검색 함수
  const Search = () => {
    const word = inputRef.current.value.trim(); //앞뒤 공백제거

    //검색어가 비어있으면 전체 데이터를 보여줌
    if(word===""){
      setDisplayData(BoardData);
      return
    };

    const result = BoardData.filter(item => 
      item.title.toLowerCase().includes(word.toLowerCase())
    );
    setDisplayData(result);
  };

  // 정렬 함수
  const Sort = (e) => {
    const type = e.target.value; // [에러2 해결] type 변수 선언 위치 확인
    
    if (!displayData) return;

    // 정렬 로직
    const sorted = [...displayData].sort((a, b) => {

      //날짜 정렬(최신순)
      if(type ==='date') return new Date(b.date) - new Date(a.date);

      //좋아요 정렬
      if(type === 'like') return (b.likes||0)-(a.likes||0);

      //조회수 정렬
      if(type === 'view') return (b.views||0)-(a.views||0);

      return 0;
    });
    setDisplayData(sorted);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') Search();
  };

  return (
    <>
      <div className="search-bar-area">
        <div className="search-input-wrap">
          <input 
            type="text" 
            placeholder="제목으로 검색" 
            ref={inputRef} 
            onKeyDown={handleKeyDown}
          />
          <button type="button" className="btn-search" onClick={Search}>검색</button>
        </div>
        <div className="sort-select-wrap">
          <select name="sort" id="sort-select" onChange={Sort}>
            <option value="date">최신순</option>
            <option value="like">좋아요순</option>
            <option value="view">조회수순</option>
          </select>
        </div>
      </div>
      <p className="total-count">(전체 {totalCount}개의 후기)</p>
    </>
  );
};

export default BoardSearch;