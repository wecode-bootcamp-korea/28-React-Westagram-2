import React, { useState } from 'react';
import { AiFillDelete, AiOutlineHeart } from 'react-icons/ai';
import './Comment.scss';

const Comment = ({ commentVal }) => {
  const [classOfHeart, setClassOfHeart] = useState('hearts');

  const putLike = e => {
    if (classOfHeart === 'hearts') {
      setClassOfHeart(classOfHeart + ' red');
    } else if (classOfHeart === 'hearts red') {
      setClassOfHeart('hearts');
    }
  };
  return (
    <>
      {commentVal.map((el, i) => {
        return (
          <span key={commentVal[i].id}>
            <strong>{commentVal[i].userId} </strong>
            {commentVal[i].value}
            <small> {commentVal[i].time}</small>
            <AiFillDelete className="delete" />
            <AiOutlineHeart className={classOfHeart} onClick={putLike} />
          </span>
        );
      })}
    </>
  );
};

export default Comment;
