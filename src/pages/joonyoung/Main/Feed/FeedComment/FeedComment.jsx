import React, { useState, useEffect, useRef } from 'react';
import Comment from './Comment/Comment';
import { BiSmile } from 'react-icons/bi';
import './FeedComment.scss';

const FeedComment = ({
  commentId,
  setCommendId,
  comments,
  setLikes,
  setComments,
  feedUpLoader,
}) => {
  const [newComment, setNewComment] = useState('');
  const [lines, setLines] = useState(0);
  const inputRef = useRef();

  const handleAddNewComment = e => {
    if (!newComment) return;
    setComments(prevComments => [
      ...prevComments,
      {
        id: commentId,
        user: feedUpLoader,
        comment: newComment.replace(/\r\n/gi, '<br />'),
      },
    ]);
    setNewComment(prev => '');
    e.preventDefault(); // textarea에  value를 직접 바꾸더라도 enter로 줄바꿈되는 것 방지
    setCommendId(prevId => prevId + 1);
    setLines(0);
  };

  const handleAddnewCommentByEnter = e => {
    if (e.key !== 'Enter') return;
    if (!e.shiftKey) handleAddNewComment(e);
    else {
      setLines(lines + 1);
    }
  };

  useEffect(() => {
    inputRef.current.style.height = `${lines * 16 + 24}px`;
  }, [lines]);

  return (
    <section className="feed__comment">
      <ul className="comments">
        {comments.map(comment => (
          <Comment
            key={comment.id}
            comment={comment}
            setComments={setComments}
            setLikes={setLikes}
          />
        ))}
      </ul>
      <div className="comment__input">
        <BiSmile className="smile" size="16" />
        <textarea
          placeholder="댓글 달기..."
          rows="2"
          value={newComment}
          onInput={e => setNewComment(e.target.value)}
          onKeyDown={handleAddnewCommentByEnter}
          ref={inputRef}
        />
        <button
          className={`add__comment ${newComment ? 'active' : ''}`}
          onClick={handleAddNewComment}
        >
          게시
        </button>
      </div>
    </section>
  );
};

export default FeedComment;
