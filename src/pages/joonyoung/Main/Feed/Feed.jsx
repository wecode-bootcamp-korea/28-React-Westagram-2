import React, { useState, useEffect } from 'react';
import FeedHeader from './FeedHeader/FeedHeader';
import FeedCarousel from './FeedCarousel/FeedCarousel';
import FeedIcons from './FeedIcons/FeedIcons';
import FeedComment from './FeedComment/FeedComment';
import './Feed.scss';

const Feed = ({
  feedUpLoader,
  uploaderProfileImg,
  carouselImages,
  initialComments,
}) => {
  const [likes, setLikes] = useState(1129);
  const [commentId, setCommendId] = useState(initialComments.length + 1);
  const [comments, setComments] = useState(initialComments);

  return (
    <section className="feed">
      <FeedHeader
        feedUpLoader={feedUpLoader}
        uploaderProfileImg={uploaderProfileImg}
      />
      <FeedCarousel carouselImages={carouselImages} />
      <FeedIcons likes={likes} setLikes={setLikes} />
      <FeedComment
        commentId={commentId}
        setCommendId={setCommendId}
        comments={comments}
        setLikes={setLikes}
        setComments={setComments}
        feedUpLoader={feedUpLoader}
      />
    </section>
  );
};

export default Feed;
