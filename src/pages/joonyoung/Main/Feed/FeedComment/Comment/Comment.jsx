import React from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { IoMdCloseCircle } from 'react-icons/io';
import Heart from '../../Heart/Heart';
import './Comment.scss';

const Comment = ({ comment, setComments, setLikes }) => {
  // TODO: handle undo remove
  const undoSlide = e => {
    e.target.closest(
      'section.delete'
    ).nextElementSibling.style.transform = `translateX(0px)`;
  };

  // TODO: handle remove todo
  const removeComment = () => {
    setComments(prevComments =>
      [...prevComments].filter(prevComment => prevComment.id !== comment.id)
    );
  };

  const slideToLeft = e => {
    // FIXME: 얼마나 이동할지 계산!! + 이동할 대상이 front Section이어야!!
    // e.target.style.transform = `translateX(-95px)`;
  };

  return (
    <li className="comment">
      <section className="delete">
        <IoMdCloseCircle size="16" onClick={undoSlide} />
        <MdDelete size="10" />
      </section>
      <section className="front" onClick={slideToLeft}>
        <strong>{comment.user}</strong>&nbsp;&nbsp;
        <span>{comment.comment}</span>
        <Heart size="16" setLikes={setLikes} />
      </section>
    </li>
  );
};

export default Comment;
