import React, { useState } from 'react';
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs';
import './FeedCarousel.scss';

const HIDDEN = 'hidden';

const FeedCarousel = ({ carouselImages }) => {
  const [currIndex, setCurrIdx] = useState(0);

  const carouselLastIndex = carouselImages.length - 1;
  const isLeftArrowHidden = currIndex === 0 ? HIDDEN : '';
  const isRightArrowHidden = currIndex === carouselLastIndex ? HIDDEN : '';
  const navigator = Array(carouselImages.length).fill(0);

  const hadnleSlideLeft = () => {
    if (currIndex === 0) return;
    setCurrIdx(prevIdx => --prevIdx);
  };

  const handleSlideRight = () => {
    if (currIndex === carouselLastIndex) return;
    setCurrIdx(prevIdx => ++prevIdx);
  };

  const navigateToSpecificIndex = e => {
    const idx = e.target?.dataset?.idx;
    idx && setCurrIdx(parseInt(idx));
  };

  let slideIndexProperties = {
    '--movedBy': `-${currIndex}px`,
  };

  return (
    <section>
      <article className="feed__carousel">
        <BsFillArrowLeftCircleFill
          size="24"
          className={`arrow ${isLeftArrowHidden}`}
          onClick={hadnleSlideLeft}
        />
        <BsFillArrowRightCircleFill
          size="24"
          className={`arrow ${isRightArrowHidden}`}
          onClick={handleSlideRight}
        />

        <ul className="img__container" style={slideIndexProperties}>
          {carouselImages?.map((carouselImg, idx) => (
            <img src={carouselImg} alt="feed " key={idx} />
          ))}
        </ul>
      </article>

      <ul className="carousel__navigator" onClick={navigateToSpecificIndex}>
        {navigator.map((_, idx) => (
          <li
            key={idx}
            data-idx={idx}
            className={`slide_btn ${currIndex === idx && 'current'}`}
          />
        ))}
      </ul>
    </section>
  );
};

export default FeedCarousel;
