import React from 'react';
import BoardItem from './BoardItem';

const BoardList = ({ data,onRemove }) => {
  return (
    <table className="board-table">
      <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일</th>
          <th>조회수</th>
          <th>좋아요</th>
          <th>관리</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <BoardItem key={item.id} {...item} onRemove={onRemove} />
        ))}
      </tbody>
    </table>
  );
};

export default BoardList;