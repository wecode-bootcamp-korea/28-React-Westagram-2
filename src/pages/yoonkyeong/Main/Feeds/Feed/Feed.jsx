import React from 'react';
import Article from '../Feed/Article/Article';
import CommentWrapper from './CommentWrapper/CommentWrapper';
import './Feed.scss';

export default function Feed({
  FeedUpLoader,
  uploaderProfileImg,
  feedImg,
  comments,
}) {
  console.log(Feed);
  return (
    <div className="feed">
      <Article
        FeedUpLoader={FeedUpLoader}
        uploaderProfileImg={uploaderProfileImg}
        feedImg={feedImg}
      />
      <CommentWrapper comments={comments} />
    </div>
  );
}
