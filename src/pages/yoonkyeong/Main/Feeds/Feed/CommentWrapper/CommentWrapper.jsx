import React, { useState } from 'react';
import './CommentWrapper.scss';
import Comment from './Comment/Comment';
import { BiSmile } from 'react-icons/bi';

export default function CommentWrapper({ comments }) {
  const [comment, setComment] = useState('');
  const [replies, setReplies] = useState([]);

  const inputCommemt = e => {
    setComment(e.target.value);
  };
  const submitComment = () => {
    if (comment !== '') {
      replies.push(comment);
      setReplies(replies);
      setComment('');
    } else {
      alert('한 글자 이상 입력하세요');
    }
  };
  function pressClick() {
    submitComment();
  }
  const pressEnter = e => {
    if (e.key === 'Enter') {
      submitComment();
    }
  };
  const validateInput = () => {
    return comment.length >= 1 ? false : true;
  };

  return (
    <div className="commentWrapper">
      <div className="submittedComments">
        <ul>
          {comments.map(comments => (
            <Comment
              key={comments.id}
              userName={comments.user}
              comment={comments.comment}
            />
          ))}
          {replies.map((comment, i) => (
            <Comment key={i} comment={comment} />
          ))}
          {/* 여기가 리얼 댓글창이었다면, 인풋 데이터를 받아서 서버에 올린 후 다시 로딩해야 하는게 맞나요? */}
        </ul>
      </div>
      <div className="commentInputWrapper">
        <BiSmile size="35" />
        <input
          className="commentInputText"
          type="text"
          name="comment"
          placeholder="댓글 달기..."
          onChange={inputCommemt}
          onKeyPress={pressEnter}
          value={comment}
        />
        <input
          className={validateInput() ? 'unvalidatedBtn' : 'validatedBtn'}
          type="button"
          disabled={validateInput() ? true : false}
          value="게시"
          onClick={pressClick}
        />
      </div>
    </div>
  );
}
