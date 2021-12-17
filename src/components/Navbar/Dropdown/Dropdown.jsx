import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { BsBookmark } from 'react-icons/bs';
import { FaCog } from 'react-icons/fa';
import { BsArrowRepeat } from 'react-icons/bs';
import './Dropdown.scss';

const Dropdown = ({ clicked }) => {
  return (
    <ul className={`profile__dropbox ${clicked && 'active'}`}>
      <li>
        <AiOutlineUser size="20" />
        <span>프로필</span>
      </li>
      <li>
        <BsBookmark size="20" />
        <span>저장됨</span>
      </li>
      <li>
        <FaCog size="20" />
        <span>설정</span>
      </li>
      <li>
        <BsArrowRepeat size="20" />
        <span>계정전환</span>
      </li>
      <li>로그아웃</li>
    </ul>
  );
};

export default Dropdown;
