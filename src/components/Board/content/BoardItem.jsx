import React from 'react';

const BoardItem = ({ id, title, author, date, views, likes,onRemove }) => {
  
  // 삭제 버튼 클릭 시 확인창 띄움
  const onDelete = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      onRemove(id);
    }
  };

  return (
    <tr>
      <td>{id}</td>
      <td className="td-title">
        <a href="#!">{title}</a>
      </td>
      <td>{author}</td>
      <td>{date}</td>
      <td>{views}</td>
      <td>{likes}</td>
      <td>
        <button className="btn-delete" onClick={onDelete}>삭제</button>
      </td>
    </tr>
  );
};

export default BoardItem;