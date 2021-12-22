import React, { useState, useEffect, useRef } from 'react';
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs';
import './FeedCarousel.scss';

const FeedCarousel = ({ carouselImages }) => {
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
    const width = carouselRef.current.getBoundingClientRect().width;
    console.log(width);
    carouselRef.current.style.transform = `translateX(-${currIdx * width}px)`;
  }, [currIdx]);

  return (
    <section>
      <article className="feed__carousel">
        <BsFillArrowLeftCircleFill
          size="24"
          className={`arrow ${currIdx === 0 ? 'hidden' : ''}`}
          onClick={hadnleSlideLeft}
        />
        <BsFillArrowRightCircleFill
          size="24"
          className={`arrow ${
            currIdx === carouselImages.length - 1 ? 'hidden' : ''
          }`}
          onClick={handleSlideRight}
        />

        <ul className="img__container" ref={carouselRef}>
          {carouselImages?.map((carouselImg, idx) => (
            <img src={carouselImg} alt="feed " key={idx} />
          ))}
        </ul>
      </article>

      <ul className="carousel__navigator" onClick={handleNavigateToIdx}>
        {Array(carouselImages?.length)
          .fill(0)
          .map((_, idx) => (
            <li
              key={idx}
              data-idx={idx}
              className={`slide_btn ${currIdx === idx && 'current'}`}
            />
          ))}
      </ul>
    </section>
  );
};

export default FeedCarousel;
