import React from 'react';
import Comment from './Comment';
import './Comment.scss';

export default function Comments({ commentArr, handleDelete }) {
  return commentArr.map((el, i) => {
    return (
      <Comment
        key={el.id}
        id={el.id}
        userId={el.userId}
        value={el.value}
        time={el.time}
        handleDelete={handleDelete}
      />
    );
  });
}
