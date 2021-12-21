import React, { useState, useEffect, useRef } from 'react';
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs';
import './Story.scss';

const Story = () => {
  const [currIdx, setCurrIdx] = useState(0);
  // const storyRef = useRef(null); TODO: resize될 때 크기 조정이 필요한지 판단필요
  const carouselRef = useRef(null);

  const handleLeftSlide = () => {
    if (currIdx === 0) return;
    if (currIdx - 3 > 0) setCurrIdx(prevIdx => prevIdx - 3);
    else setCurrIdx(prevIdx => 0);
  };

  const handleRightSlide = () => {
    if (currIdx >= 3) return;
    if (currIdx + 3 <= 3) setCurrIdx(prevIdx => 3 - prevIdx);
    else setCurrIdx(prevIdx => prevIdx + 3);
  };

  useEffect(() => {
    let movedBy = currIdx * 56;
    if (currIdx === 3) movedBy += 16;
    carouselRef.current.style.transform = `translateX(-${movedBy}px)`;
  }, [currIdx]);

  return (
    <section className="stories">
      <ul className="stories__box" ref={carouselRef}>
        <li className="story">
          <img src="images/joonyoung/stories/story1.jpg" alt="story profile " />
          <p>Enna</p>
        </li>
        <li className="story">
          <img src="images/joonyoung/stories/story2.jpg" alt="story profile " />
          <p>Jesy</p>
        </li>
        <li className="story">
          <img src="images/joonyoung/stories/story3.jpg" alt="story profile " />
          <p>Denial</p>
        </li>
        <li className="story">
          <img src="images/joonyoung/stories/story4.jpg" alt="story profile " />
          <p>Meow</p>
        </li>
        <li className="story">
          <img src="images/joonyoung/stories/story5.jpg" alt="story profile " />
          <p>Christina</p>
        </li>
        <li className="story">
          <img src="images/joonyoung/stories/story6.jpg" alt="story profile " />
          <p>Mally</p>
        </li>
        <li className="story">
          <img src="images/joonyoung/stories/story7.jpg" alt="story profile " />
          <p>Karel</p>
        </li>
        <li className="story">
          <img src="images/joonyoung/stories/story8.jpg" alt="story profile " />
          <p>Bred</p>
        </li>
        <li className="story">
          <img src="images/joonyoung/stories/story9.jpg" alt="story profile " />
          <p>Andrew</p>
        </li>
        <li className="story">
          <img
            src="images/joonyoung/stories/story10.jpg"
            alt="story profile "
          />
          <p>Emily</p>
        </li>
      </ul>
      <BsFillArrowLeftCircleFill
        className={`arrow left ${currIdx === 0 ? 'hidden' : ''}`}
        size="18"
        onClick={handleLeftSlide}
      />
      <BsFillArrowRightCircleFill
        className={`arrow right ${currIdx === 3 ? 'hidden' : ''}`}
        size="18"
        onClick={handleRightSlide}
      />
    </section>
  );
};

export default Story;
