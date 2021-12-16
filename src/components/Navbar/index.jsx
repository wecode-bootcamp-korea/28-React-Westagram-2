import React, { useState } from 'react';
import { MdOutlineAddBox } from 'react-icons/md';
import { HiHome } from 'react-icons/hi';
import { FaRegPaperPlane } from 'react-icons/fa';
import {
  AiOutlineSearch,
  AiOutlineCompass,
  AiOutlineHeart,
  AiOutlineInstagram,
} from 'react-icons/ai';
import Dropdown from './Dropdown/Dropdown';
import './Navbar.scss';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <header className="navbar flex items-center">
      <h1>
        <AiOutlineInstagram size="40" />
        <span className="title">Westagram</span>
      </h1>
      <div className="search flex items-center">
        <input type="text" placeholder="검색" className="search-input" />
        <AiOutlineSearch className="icon" />
      </div>
      <div className="navbar__icons flex items-center">
        <HiHome className="icon" />
        <FaRegPaperPlane className="icon" />
        <MdOutlineAddBox className="icon" />
        <AiOutlineCompass className="icon" />
        <AiOutlineHeart className="icon" />
        <span className="image__wrapper flex items-center">
          <img
            src="/logo192.png"
            alt="user profile"
            onClick={() => setIsActive(prev => !prev)}
          />
          <Dropdown clicked={isActive} />
        </span>
      </div>
    </header>
  );
};

export default Navbar;
