import React from 'react';
import { BsThreeDots } from 'react-icons/bs';
import './FeedHeader.scss';

const FeedHeader = ({ feedUpLoader, uploaderProfileImg }) => {
  return (
    <header className="feed__header flex items-center">
      <div className="img__skeleton feed__header-img">
        <img src={uploaderProfileImg} alt="Enna's Feed icon" />
      </div>
      <p>{feedUpLoader}</p>
      <BsThreeDots size="20" className="dots" />
    </header>
  );
};

export default FeedHeader;
