import React from 'react';
import './comment.scss';
import { BiX, BiHeart } from 'react-icons/bi';

export default function Comment({ userName, comment }) {
  return (
    <li>
      <span className="userName">{userName} </span>
      <span className="comment">{comment}</span>
      <BiX className="deleteComment" />
      <BiHeart className="likeThisComment" />
    </li>
  );
}
Comment.defaultProps = {
  userName: 'Dummie',
};
