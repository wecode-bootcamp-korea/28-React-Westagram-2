import React, { useEffect } from 'react';
import { GrClose } from 'react-icons/gr';
import './Modal.scss';

const Modal = ({ profileImg, username, setModalIdx }) => {
  const closeModal = () => setModalIdx(false);

  useEffect(() => {
    window.addEventListener('keydown', closeModal);
    return () => {
      window.removeEventListener('keydown', closeModal);
    };
  }, []);

  const hearts = Array(20).fill(0);

  return (
    <div className="modal">
      <img src={profileImg} alt="modal Profile img" />
      <GrClose size="20" onClick={closeModal} />
      <h1>
        Welcome to wecode
        <br />
        <span>{username}</span>
        {hearts.map((_, idx) => (
          <div className="heart_bubble" key={idx} />
        ))}
      </h1>
    </div>
  );
};

export default React.memo(Modal);
