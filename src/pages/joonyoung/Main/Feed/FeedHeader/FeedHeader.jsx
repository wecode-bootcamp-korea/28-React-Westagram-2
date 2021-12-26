import React from 'react';
import { BsThreeDots } from 'react-icons/bs';
import './FeedHeader.scss';

const FeedHeader = ({ feedUpLoader, uploaderProfileImg, uploaderInfo }) => {
  return (
    <header className="feed__header">
      <div className="img__skeleton feed__header-img-container">
        <img src={uploaderProfileImg} alt={uploaderInfo} />
      </div>
      <p>{feedUpLoader}</p>
      <BsThreeDots size="20" className="dots" />
    </header>
  );
};

export default FeedHeader;
