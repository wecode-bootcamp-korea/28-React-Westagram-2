import React, { useState, useCallback } from 'react';
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs';
import './Story.scss';

const Story = ({ stories, setModalIdx }) => {
  const [currIdx, setCurrIdx] = useState(0);

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

  const openModal = e => {
    setModalIdx(parseInt(e.target?.dataset?.idx));
  };

  const computedMovedBy = useCallback(() => {
    let movedBy = currIdx * 56;
    if (currIdx >= 3) movedBy += 16;
    return { '--movedBy': `-${movedBy}px` };
  }, [currIdx]);

  return (
    <section className="joonyoung__stories">
      <ul
        className="stories__box"
        onClick={openModal}
        style={computedMovedBy()}
      >
        {stories.map((story, idx) => (
          <li className="story" key={story.username}>
            <img
              src={story.imgUrl}
              data-idx={idx + 1}
              alt={`${story.username}'s profile`}
            />
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
