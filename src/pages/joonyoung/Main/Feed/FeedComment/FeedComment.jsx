import React, { useState } from 'react';
import Comment from './Comment/Comment';
import { BiSmile } from 'react-icons/bi';
import './FeedComment.scss';

const FeedComment = ({ setLikes }) => {
  const [id, setId] = useState(4);
  const [comments, setComments] = useState([
    {
      id: 1,
      user: '28기 양대영님',
      comment: '여러분 치킨계 쓰셔야 합니다..!! 👀 👀',
    },
    {
      id: 2,
      user: '28기 이아영님',
      comment: '대영님도 안 쓰셨잖아요?! 🤭',
    },
    {
      id: 3,
      user: '28기 박윤국님',
      comment: '🎸 🎸 🎸',
    },
  ]);
  const [newComment, setNewComment] = useState('');

  const handleAddNewComment = e => {
    setComments(prevComments => [
      ...prevComments,
      {
        id,
        user: '28기 박준영님',
        comment: newComment.replace(/\r\n/gi, '<br />'),
      },
    ]);
    setNewComment(prev => '');
    e.preventDefault(); // textarea에  value를 직접 바꾸더라도 enter로 줄바꿈되는 것 방지
    setId(prev => ++prev);
  };

  const handleAddnewCommentByEnter = e => {
    if (e.key !== 'Enter') return;
    handleAddNewComment(e);
  };

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
          onKeyDown={handleAddnewCommentByEnter}
          onInput={e => setNewComment(e.target.value)}
          value={newComment}
        />
        <button className="add__comment" onClick={handleAddNewComment}>
          {' '}
          게시
        </button>
      </div>
    </section>
  );
};

export default FeedComment;
