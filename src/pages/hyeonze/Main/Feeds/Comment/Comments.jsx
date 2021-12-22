import React from 'react';
import Comment from './Comment';
import './Comment.scss';

export default function Comments({ commentArr }) {
  return commentArr.map(el => {
    return (
      <Comment key={el.id} userId={el.userId} value={el.value} time={el.time} />
    );
  });
}
