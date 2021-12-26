import React, { useState } from 'react';
import Comment from './Comment/Comment';
import { BiSmile } from 'react-icons/bi';
import './FeedComment.scss';

let id = 4;
const ACTIVE = 'active';

const FeedComment = ({ initialComments, setLikes, feedUpLoader }) => {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState('');
  const isButtonActive = newComment ? ACTIVE : '';

  const addNewComment = e => {
    if (!newComment) return;
    setComments(prevComments => [
      ...prevComments,
      {
        id: ++id,
        user: feedUpLoader,
        comment: newComment.replace(/\r\n/gi, '<br />'),
      },
    ]);
    setNewComment('');
    e.preventDefault();
  };

  const handleAddnewCommentByEnter = e => {
    if (e.key !== 'Enter') return;
    else if (!e.shiftKey) addNewComment(e);
  };

  const deleteComment = id => {
    setComments(prevComments =>
      [...prevComments].filter(comment => comment.id !== id)
    );
  };

  return (
    <section className="feed__comment">
      <ul className="comments">
        {comments.map(comment => (
          <Comment
            key={comment.id}
            comment={comment}
            setLikes={setLikes}
            deleteComment={deleteComment}
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
        />
        <button
          className={`add__comment ${isButtonActive}`}
          onClick={addNewComment}
        >
          게시
        </button>
      </div>
    </section>
  );
};

export default FeedComment;
