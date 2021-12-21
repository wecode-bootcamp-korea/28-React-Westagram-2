import React, { useState, useEffect } from 'react';
import '../component/CommentList.scss';
import Comment from './Comment';

export default function CommentList({ submittedComment }) {
  const [commentList, setCommentList] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setCommentList(data);
        // 위의 두 줄의 역할이란?
      });
  });
  return (
    <div className="commentList">
      <div className="mockData">mockdata is comming..</div>
      <ul>
        {commentList.map(comment => (
          <Comment
            key={comment.id}
            name={comment.userName}
            comment={comment.content}
          />
        ))}
      </ul>
      <ul>
        {submittedComment.map((comment, i) => (
          <Comment key={i} comment={comment} />
        ))}
      </ul>
    </div>
  );
}
