import React from 'react';
import '../component/comment.scss';
import { BiX, BiHeart } from 'react-icons/bi';

export default function Comment({ userName, submittedComment }) {
  return (
    <ul>
      {submittedComment.map((comment, i) => (
        <li key={i}>
          <span className="userName">{userName} </span>
          <span className="comment">{comment}</span>
          <BiX className="deleteComment" />
          <BiHeart className="likeThisComment" />
        </li>
      ))}
    </ul>
  );
}
