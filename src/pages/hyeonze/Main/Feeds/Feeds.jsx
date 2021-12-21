import React, { useState, useEffect } from 'react';
import { AiFillHeart, AiOutlineComment, AiOutlineUpload } from 'react-icons/ai';
import { GrBookmark } from 'react-icons/gr';
import './Feeds.scss';
import Comment from './Comment/Comment';

export default function Feeds() {
  // const [commentVal, setCommentVal] = useState([
  //   {
  //     userId: 'canon_mj',
  //     value: '위워크에서 진행한 베이킹 클래스...',
  //     time: '더보기',
  //   },
  //   { userId: 'neceosecius', value: '거봐 좋았잖아~~~~', time: '42분전' },
  // ]);
  const [commentVal, setCommentVal] = useState([]);
  const addedCommentVal = [...commentVal];
  const [classOfBtn, setClassOfBtn] = useState('');
  const [currInputVal, setCurrInputVal] = useState('');

  const handleInput = e => {
    e.target.value ? setClassOfBtn('blue') : setClassOfBtn('');
    if (e.keyCode === 13) uploadComment();
    setCurrInputVal(e.target.value);
  };

  const uploadComment = e => {
    e.preventDefault();
    addedCommentVal.push({
      id: addedCommentVal.length + 1,
      userId: 'userid',
      value: currInputVal,
      time: '방금전',
    });
    setCommentVal(addedCommentVal);
    setCurrInputVal('');
    setClassOfBtn('');
    console.log(commentVal);
  };

  useEffect(() => {
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET',
    }).then(res =>
      res.json().then(data => {
        setCommentVal(data);
      })
    );
  }, []);

  return (
    <div className="feeds">
      <article>
        <div className="top_menu">
          <span>
            <img src="images/hyeonze/profile.jpg" alt="프로필" />
            canon_mj
          </span>
          <span>
            <i className="fas fa-ellipsis-h" />
          </span>
        </div>
        <img src="images/hyeonze/fig.jpg" alt="무화과" />
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
