import React, { useState } from 'react';
import {
  FaRegHeart,
  FaRegComment,
  FaRegPaperPlane,
  FaRegBookmark,
} from 'react-icons/fa';
import './FeedIcons.scss';

const FeedIcons = ({ likes, setlikes }) => {
  const [clicked, setClicked] = useState(false);

  const handleHeartClick = () => {
    // clicked ? setLikes++ : setlikes--;
    clicked ? setlikes(prev => prev++) : setlikes(prev => prev--);
  };

  const parseLikeToStr = () => {
    return likes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <section className="feed__icons">
      <article>
        <FaRegHeart size="20" className="heart" />
        <FaRegComment size="20" />
        <FaRegPaperPlane size="20" />
        <FaRegBookmark size="20" />
      </article>
      <p>
        좋아요 <span class="like-counter">{parseLikeToStr()}</span>개
      </p>
    </section>
  );
};

export default FeedIcons;
