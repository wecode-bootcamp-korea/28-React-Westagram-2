import React, { useState } from 'react';
import FeedHeader from './FeedHeader/FeedHeader';
import FeedCarousel from './FeedCarousel/FeedCarousel';
import './Feed.scss';
import FeedIcons from './FeedIcons/FeedIcons';
import FeedComment from './FeedComment/FeedComment';

const Feed = () => {
  const [likes, setLikes] = useState(1129);

  return (
    <section className="feed">
      <FeedHeader />
      <FeedCarousel />
      <FeedIcons likes={likes} setLikes={setLikes} />
      <FeedComment setLikes={setLikes} />
    </section>
  );
};

export default Feed;
