import React, { useState } from 'react';
import { AiFillDelete, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const Comment = ({ id, userId, value, time, handleDelete }) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <span id={id} className="comment">
      <strong>{userId} </strong>
      {value}
      <small> {time}</small>
      <AiFillDelete onClick={handleDelete} className="delete" />
      {isLiked ? (
        <AiFillHeart onClick={toggleLike} className="hearts red" />
      ) : (
        <AiOutlineHeart onClick={toggleLike} className="hearts" />
      )}
    </span>
  );
};

export default Comment;
