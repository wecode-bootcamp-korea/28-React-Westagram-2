import React from 'react';
import '../component/comment.scss';
import { BiX, BiHeart } from 'react-icons/bi';

export default function Comment({ name, comment }) {
  return (
    <li>
      <span className="userName">{name} </span>
      <span className="comment">{comment}</span>
      <BiX className="deleteComment" />
      <BiHeart className="likeThisComment" />
    </li>
  );
}
Comment.defaultProps = {
  name: 'Dummie',
};
