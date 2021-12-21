import React, { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './Heart.scss';

const Heart = ({ size, setLikes }) => {
  const [clicked, setClicked] = useState(false);

  const handleClickHeart = () => {
    setClicked(prev => !prev);
    setLikes(prevLikes => (clicked ? prevLikes - 1 : prevLikes + 1));
  };

  return clicked ? (
    <AiFillHeart
      className={`heart ${clicked ? 'like' : ''}`}
      size={size}
      onClick={handleClickHeart}
    />
  ) : (
    <AiOutlineHeart
      className={`heart ${clicked ? 'like' : ''}`}
      size={size}
      onClick={handleClickHeart}
    />
  );
};

export default Heart;
