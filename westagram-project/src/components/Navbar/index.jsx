import { MdOutlineAddBox } from 'react-icons/md';
import { HiHome } from 'react-icons/hi';
import { FaRegPaperPlane } from 'react-icons/fa';
import {
  AiOutlineSearch,
  AiOutlineCompass,
  AiOutlineHeart,
} from 'react-icons/ai';
import './Navbar.scss';

const Navbar = () => {
  return (
    <header className="navbar flex items-center">
      <h2>Westagram</h2>
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
          <img src="/logo192.png" alt="user profile" />
        </span>
      </div>
    </header>
  );
};

export default Navbar;
