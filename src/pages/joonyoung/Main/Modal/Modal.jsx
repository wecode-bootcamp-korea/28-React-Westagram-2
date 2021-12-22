import React, { useEffect } from 'react';
import { GrClose } from 'react-icons/gr';
import './Modal.scss';

const Modal = ({ profileImg, username, setIsModalOpen }) => {
  useEffect(() => {
    const closeModal = key => setIsModalOpen(false);
    window.addEventListener('keydown', e => closeModal(e.key));
    return () => {
      window.removeEventListener('keydown', e => closeModal(e.key));
    };
  }, []);

  return (
    <div className="modal">
      <img src={profileImg} alt="modal Profile img" />
      <GrClose size="20" onClick={() => setIsModalOpen(false)} />
      <h1>
        Welcome to wecode
        <br />
        <span>{username}</span>
        {Array(25)
          .fill(0)
          .map((_, idx) => (
            <div id="" className="heart_bubble" key={idx} />
          ))}
      </h1>
    </div>
  );
};

export default React.memo(Modal);
