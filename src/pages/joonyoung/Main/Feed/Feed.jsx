import React, { useState } from 'react';
import FeedHeader from './FeedHeader/FeedHeader';
import FeedCarousel from './FeedCarousel/FeedCarousel';
import FeedIcons from './FeedIcons/FeedIcons';
import FeedComment from './FeedComment/FeedComment';
import './Feed.scss';

const Feed = ({ feed }) => {
  const [likes, setLikes] = useState(feed?.likes);

  return (
    <section className="joonyoung__feed">
      <FeedHeader
        feedUpLoader={feed?.feedUpLoader}
        uploaderProfileImg={feed?.uploaderProfileImg}
        uploaderInfo={feed?.uploaderInfo}
      />
      <FeedCarousel carouselImages={feed?.carouselImages} />
      <FeedIcons likes={likes} setLikes={setLikes} />
      <FeedComment
        initialComments={feed?.comments}
        setLikes={setLikes}
        feedUpLoader={feed?.feedUpLoader}
      />
    </section>
  );
};

export default Feed;
