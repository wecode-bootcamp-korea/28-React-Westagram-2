import React from 'react';
import { BsThreeDots } from 'react-icons/bs';
import './FeedHeader.scss';

const FeedHeader = () => {
  return (
    <header className="feed__header flex items-center">
      <div className="feed__header-img">
        <img
          src="./images/joonyoung/stories/story1.jpg"
          alt="Enna's Feed icon"
        />
      </div>
      <p>Enna</p>
      <BsThreeDots size="20" className="dots" />
    </header>
  );
};

export default FeedHeader;
