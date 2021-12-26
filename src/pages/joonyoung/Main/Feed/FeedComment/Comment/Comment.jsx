import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { IoMdCloseCircle } from 'react-icons/io';
import Heart from '../../Heart/Heart';
import './Comment.scss';

let animationID = 0;
let startX = 0;

const Comment = ({ comment, setLikes, deleteComment }) => {
  const [isMoving, setIsMoving] = useState(false);
  const [movedBy, setMovedBy] = useState(0);

  const startDrag = e => {
    setIsMoving(true);
    startX = e.pageX;
    animationID = requestAnimationFrame(animation);
  };

  const draggingCommentLeft = e => {
    if (isMoving && startX >= e.pageX) {
      let computedDiff = startX - e.pageX;
      if (computedDiff > 25) computedDiff = 100;
      else if (computedDiff > 100) computedDiff = 100;
      setMovedBy(computedDiff);
    }
  };

  const stopDrag = e => {
    cancelAnimationFrame(animationID);
    animationID = 0;
    startX = 0;
    setIsMoving(false);
  };

  const animation = () => {
    if (isMoving) requestAnimationFrame(animation);
  };

  const undoSlide = () => {
    setMovedBy(0);
  };

  return (
    <li className="comment">
      <section className="delete">
        <IoMdCloseCircle size="16" onClick={undoSlide} />
        <MdDelete size="10" onClick={() => deleteComment(comment.id)} />
      </section>
      <section
        className="front"
        style={{ '--movedBy': `-${movedBy}px` }}
        onMouseDown={startDrag}
        onMouseMove={draggingCommentLeft}
        onMouseUp={stopDrag}
      >
        <strong>{comment.user}</strong>&nbsp;&nbsp;
        <span>{comment.comment}</span>
        <Heart size="16" setLikes={setLikes} />
      </section>
    </li>
  );
};

export default React.memo(Comment);
