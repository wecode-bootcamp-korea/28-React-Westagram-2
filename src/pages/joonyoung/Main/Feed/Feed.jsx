import React from 'react';
import FeedHeader from './FeedHeader';
import FeedCarousel from './FeedCarousel';
import './Feed.scss';

const Feed = () => {
  return (
    <section className="feed">
      <FeedHeader />
      <FeedCarousel />
      <h2>Hello world</h2>
      {/* Feed icon */}
      {/* feed Comment */}
    </section>
  );
};

export default Feed;
