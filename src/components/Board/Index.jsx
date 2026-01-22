import React, { useState } from "react";
import BoardBanner from "./visual/BoardBanner";
import BoardSearch from "./filter/BoardSearch";
import BoardList from "./content/BoardList";
import Pagination from "./pagination/Pagination";
import { BoardData } from "./content/BoardData"; 
import "./contents.css";

const Index = () => {

const [displayData, setDisplayData] = useState(BoardData);

//삭제 실행 함수
const onRemove = (id) => {
  //id가 일치하지 않는 데이터만 걸러서 새로운 배열 생성
  const nextData = displayData.filter(item => item.id !== id);
  setDisplayData(nextData);
}

  return (
    <main className="board-container-wrapper">
      <BoardBanner />
      <div className="inner">
        <BoardSearch 
          totalCount={BoardData.length} 
          displayData={displayData} 
          setDisplayData={setDisplayData} 
        />
        
        <BoardList data={displayData} onRemove={onRemove}/> 
        <Pagination />
      </div>
    </main>
  );
};

export default Index;