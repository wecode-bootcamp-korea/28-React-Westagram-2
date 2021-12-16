import React, { useState } from 'react';
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs';
import './FeedCarousel.scss';

const FeedCarousel = () => {
  const [currIdx, setCurrIdx] = useState(0);

  const hadnleSlideLeft = () => {
    console.log('left btn clicked');
  };

  const handleSlideRight = () => {
    console.log('right btn clicked');
  };

  return (
    <section>
      <article className="feed__carousel">
        <BsFillArrowLeftCircleFill
          size="24"
          className="arrow"
          onClick={hadnleSlideLeft}
        />
        <BsFillArrowRightCircleFill
          size="24"
          className="arrow"
          onClick={handleSlideRight}
        />

        <div className="img__container">
          <img
            src="./images/joonyoung/feed/feed1/pexels-fauxels-3184291.jpg"
            alt="feed 1st team gathered"
          />
          <img
            src="./images/joonyoung/feed/feed1/pexels-fauxels-3184302.jpg"
            alt="feed 2nd man~"
          />
          <img
            src="./images/joonyoung/feed/feed1/pexels-fauxels-3184433.jpg"
            alt="feed 2nd man~"
          />
          {/* <img
            src="./images/joonyoung/feed/feed1/pexels-fauxels-3184433.jpg"
            alt="feed 3rd hivefive"
          />
          <img
            src="./images/joonyoung/feed/feed1/pexels-min-an-853168.jpg"
            alt="feed 4th sunset"
          />
          <img
            src="./images/joonyoung/feed/feed1/pexels-this-is-zun-1116302.jpg"
            alt="feed 5th make start"
          /> */}
        </div>
      </article>

      <ul className="carousel__navigator">
        <li className="slide_btn current" data-idx="0" />
        <li className="slide_btn" data-idx="1" />
        <li className="slide_btn" data-idx="2" />
        <li className="slide_btn" data-idx="3" />
        <li className="slide_btn" data-idx="4" />
      </ul>
    </section>
  );
};

export default FeedCarousel;
