import React, { useState, useEffect, useRef } from 'react';
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs';
import './Story.scss';

const Story = ({ stories, setIsModalOpen, setModalIdx }) => {
  const [currIdx, setCurrIdx] = useState(0);
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

  const handleModalOpen = e => {
    const closestLi = e.target.closest('li');
    setIsModalOpen(true);
    setModalIdx(parseInt(closestLi.dataset?.idx));
  };

  useEffect(() => {
    let movedBy = currIdx * 56;
    if (currIdx === 3) movedBy += 16;
    carouselRef.current.style.transform = `translateX(-${movedBy}px)`;
  }, [currIdx]);

  return (
    <section className="stories">
      <ul className="stories__box" ref={carouselRef} onClick={handleModalOpen}>
        {stories.map((story, idx) => (
          <li className="story" data-idx={idx + 1} key={story.username}>
            <img src={story.imgUrl} alt={story.username} />
            <p>{story.username}</p>
          </li>
        ))}
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

export default React.memo(Story);
