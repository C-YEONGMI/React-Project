import React from 'react';
import './Pagination.css';

const Pagination = () => {
  return (
    <nav className="pagination">
      {/* 처음으로 가기 */}
      <a href="#!" className="prev-all">&laquo;</a>
      {/* 이전으로 가기 */}
      <a href="#!" className="prev">&lt;</a>
      
      {/* 페이지 번호 */}
      <a href="#!" className="active">1</a>
      <a href="#!">2</a>
      <span className="dots">...</span>
      <a href="#!">16</a>
      <a href="#!">17</a>
      
      {/* 다음으로 가기 */}
      <a href="#!" className="next">&gt;</a>
      {/* 끝으로 가기 */}
      <a href="#!" className="next-all">&raquo;</a>
    </nav>
  );
};

export default Pagination;