import React, { useState } from 'react';
import { AiFillDelete, AiOutlineHeart } from 'react-icons/ai';
import './Comment.scss';

const Comment = ({ commentVal }) => {
  const [classOfHeart, setClassOfHeart] = useState('hearts');

  // 잘못된 좋아요
  const putLike = () => {
    if (classOfHeart === 'hearts') {
      setClassOfHeart(classOfHeart + ' red');
    } else if (classOfHeart === 'hearts red') {
      setClassOfHeart('hearts');
    }
  };

  return (
    <>
      {commentVal.map(el => {
        return (
          <span key={el.id}>
            <strong>{el.userId} </strong>
            {el.value}
            <small> {el.time}</small>
            <AiFillDelete className="delete" />
            <AiOutlineHeart className={classOfHeart} onClick={putLike} />
            {/* <AiOutlineHeart className={classOfHeart} /> */}
          </span>
        );
      })}
    </>
  );
};

export default Comment;
