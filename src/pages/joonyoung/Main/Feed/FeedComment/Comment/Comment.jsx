import React, { useState, useRef } from 'react';
import { MdDelete } from 'react-icons/md';
import { IoMdCloseCircle } from 'react-icons/io';
import Heart from '../../Heart/Heart';
import './Comment.scss';

const Comment = ({ comment, setComments, setLikes }) => {
  const [isMoving, setIsMoving] = useState(false);
  const [startX, setStartX] = useState(0);
  const [movedX, setMovedX] = useState(0);
  const [animationID, setAnimationID] = useState(0);
  const frontRef = useRef(null);

  const undoSlide = e => {
    frontRef.current.style.transform = `translateX(0px)`;
  };

  const removeComment = () => {
    setComments(prevComments =>
      [...prevComments].filter(prevComment => prevComment.id !== comment.id)
    );
  };

  const startDrag = e => {
    setIsMoving(true);
    setStartX(e.pageX);
    setAnimationID(requestAnimationFrame(animation));
  };

  const draggingCommentLeft = e => {
    if (isMoving) {
      setMovedX(e.pageX);
      slideComment();
    }
  };

  const stopDrag = e => {
    // 너무 조금 움직인 경우에 대해 reset해준다.
    if (movedX - startX < 30)
      frontRef.current.style.transform = `translateX(0px)`;

    cancelAnimationFrame(animationID);
    setStartX(0);
    setMovedX(0);
    setAnimationID(0);
    setIsMoving(false);
  };

  const animation = () => {
    slideComment();
    if (isMoving) requestAnimationFrame(animation);
  };

  const slideComment = () => {
    // 움직인 거리가 100px이 넘어가면 안되며 30px만 넘게 움직여도 모두 보이도록 설정한다.
    let movedBy = startX - movedX;
    if (movedBy > 30) movedBy = 100;
    frontRef.current.style.transform = `translateX(-${movedBy}px)`;
  };

  // useEffect(() => {
  //   if (movedX === 0) return;
  //   let movedBy = startX - movedX;
  //   if (movedBy >= 50) movedBy = 100;
  //   frontRef.current.style.transform = `translateX(-${movedBy}px)`;
  // }, [movedX]);

  return (
    <li className="comment">
      <section className="delete">
        <IoMdCloseCircle size="16" onClick={undoSlide} />
        <MdDelete size="10" onClick={removeComment} />
      </section>
      <section
        className="front"
        ref={frontRef}
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
