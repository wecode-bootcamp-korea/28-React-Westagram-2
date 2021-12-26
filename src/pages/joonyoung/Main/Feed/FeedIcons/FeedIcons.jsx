import React from 'react';
import { FaRegComment, FaRegPaperPlane, FaRegBookmark } from 'react-icons/fa';
import Heart from '../Heart/Heart';
import './FeedIcons.scss';

const FeedIcons = ({ likes, setLikes }) => {
  return (
    <section className="feed__icons">
      <div className="feed__icon">
        <Heart size="20" setLikes={setLikes} />
        <FaRegComment size="20" />
        <FaRegPaperPlane size="20" />
        <FaRegBookmark size="20" />
      </div>
      <p>
        좋아요 <span className="like-counter">{likes.toLocaleString()}</span>개
      </p>
    </section>
  );
};

export default FeedIcons;
