import React, { useState, useEffect, useRef } from 'react';
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs';
import './FeedCarousel.scss';

const FeedCarousel = () => {
  const [currIdx, setCurrIdx] = useState(0);
  const carouselRef = useRef(null);

  const hadnleSlideLeft = () => {
    if (currIdx === 0) return;
    setCurrIdx(prevIdx => --prevIdx);
  };

  const handleSlideRight = () => {
    if (currIdx === 4) return;
    setCurrIdx(prevIdx => ++prevIdx);
  };

  const handleNavigateToIdx = e => {
    const idx = e.target?.dataset?.idx;
    idx && setCurrIdx(_ => parseInt(idx));
  };

  useEffect(() => {
    carouselRef.current.style.transform = `translateX(-${currIdx * 560}px)`;
  }, [currIdx]);

  return (
    <section className="">
      <article className="feed__carousel">
        <BsFillArrowLeftCircleFill
          size="24"
          className={`arrow ${currIdx === 0 ? 'hidden' : ''}`}
          onClick={hadnleSlideLeft}
        />
        <BsFillArrowRightCircleFill
          size="24"
          className={`arrow ${currIdx === 5 ? 'hidden' : ''}`}
          onClick={handleSlideRight}
        />

        <div className="img__container" ref={carouselRef}>
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
            alt="feed 3rd gathering hands"
          />
          <img
            src="./images/joonyoung/feed/feed1/pexels-min-an-853168.jpg"
            alt="feed 4th sunset"
          />
          <img
            src="./images/joonyoung/feed/feed1/pexels-this-is-zun-1116302.jpg"
            alt="feed 5th make start"
          />
        </div>
      </article>

      <ul className="carousel__navigator" onClick={handleNavigateToIdx}>
        <li
          className={`slide_btn ${currIdx === 0 && 'current'}`}
          data-idx="0"
        />
        <li
          className={`slide_btn ${currIdx === 1 && 'current'}`}
          data-idx="1"
        />
        <li
          className={`slide_btn ${currIdx === 2 && 'current'}`}
          data-idx="2"
        />
        <li
          className={`slide_btn ${currIdx === 3 && 'current'}`}
          data-idx="3"
        />
        <li
          className={`slide_btn ${currIdx === 4 && 'current'}`}
          data-idx="4"
        />
      </ul>
    </section>
  );
};

export default FeedCarousel;
