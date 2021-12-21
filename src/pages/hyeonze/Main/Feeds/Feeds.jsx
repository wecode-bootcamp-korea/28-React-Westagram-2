import React, { useState, useEffect } from 'react';
import { AiFillHeart, AiOutlineComment, AiOutlineUpload } from 'react-icons/ai';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { GrBookmark } from 'react-icons/gr';
import './Feeds.scss';
import Comment from './Comment/Comment';

export default function Feeds({ userId, profileImg, img, comments }) {
  const [commentVal, setCommentVal] = useState(comments);
  const addedCommentVal = [...commentVal];
  const [classOfBtn, setClassOfBtn] = useState('');
  const [currInputVal, setCurrInputVal] = useState('');

  const handleInput = e => {
    const { value } = e.target;
    value ? setClassOfBtn('blue') : setClassOfBtn('');
    if (e.keyCode === 13) uploadComment();
    setCurrInputVal(value);
  };

  const uploadComment = e => {
    e.preventDefault();
    if (!currInputVal) return;
    addedCommentVal.push({
      id: addedCommentVal.length + 1,
      userId: 'userid',
      value: currInputVal,
      time: '방금전',
    });
    setCommentVal(addedCommentVal);
    setCurrInputVal('');
    setClassOfBtn('');
  };

  // commentData.json
  // useEffect(() => {
  //   fetch('http://localhost:3000/data/commentData.json', {
  //     method: 'GET',
  //   }).then(res =>
  //     res.json().then(data => {
  //       setCommentVal(data);
  //     })
  //   );
  // }, []);

  return (
    <div className="feeds">
      <article>
        <div className="top_menu">
          <span>
            <img src={profileImg} alt="프로필" />
            {userId}
          </span>
          <span>
            <BiDotsHorizontalRounded />
          </span>
        </div>
        <img src={img} alt="무화과" />
        <div className="bottom_menu">
          <span>
            <AiFillHeart className="" />
          </span>
          <span>
            <AiOutlineComment className="" />
          </span>
          <span>
            <AiOutlineUpload className="" />
          </span>
          <span>
            <GrBookmark className="" />
          </span>
        </div>
        <div className="comments">
          <span>4 Likes</span>
          <Comment commentVal={commentVal} />
        </div>
        <form className="add_comments">
          <input
            type="text"
            placeholder="댓글 달기..."
            className="input_upload"
            onChange={handleInput}
            value={currInputVal}
          />
          <button className={classOfBtn} onClick={uploadComment}>
            게시
          </button>
        </form>
      </article>
    </div>
  );
}
