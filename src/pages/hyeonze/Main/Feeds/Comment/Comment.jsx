import React, { useState } from 'react';
import { AiFillDelete, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const Comment = ({ userId, value, time }) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <span>
      <strong>{userId} </strong>
      {value}
      <small> {time}</small>
      <AiFillDelete className="delete" />
      {isLiked ? (
        <AiFillHeart onClick={toggleLike} className="hearts red" />
      ) : (
        <AiOutlineHeart onClick={toggleLike} className="hearts" />
      )}
    </span>
  );
};

export default Comment;
