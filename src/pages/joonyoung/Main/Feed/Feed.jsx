import React, { useState } from 'react';
import FeedHeader from './FeedHeader';
import FeedCarousel from './FeedCarousel';
import './Feed.scss';
import FeedIcons from './FeedIcons';

const Feed = () => {
  const [likes, setLikes] = useState(1129);

  return (
    <section className="feed">
      <FeedHeader />
      <FeedCarousel />
      <FeedIcons likes={likes} setLikes={setLikes} />
      {/* Feed icon */}
      {/* feed Comment */}
    </section>
  );
};

export default Feed;
