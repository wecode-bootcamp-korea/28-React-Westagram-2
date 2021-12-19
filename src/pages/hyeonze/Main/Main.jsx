import React, { useState } from 'react';
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineComment,
  AiOutlineUpload,
  AiFillDelete,
} from 'react-icons/ai';
import { GrBookmark } from 'react-icons/gr';
import './Main.scss';

const Main = () => {
  const [commentVal, setCommentVal] = useState([
    {
      userId: 'canon_mj',
      value: '위워크에서 진행한 베이킹 클래스...',
      time: '더보기',
    },
    { userId: 'neceosecius', value: '거봐 좋았잖아~~~~', time: '42분전' },
  ]);
  const [addedCommentVal, setAddedCommentVal] = useState(commentVal);
  const [currInputVal, setCurrInputVal] = useState('');
  const [classOfBtn, setClassOfBtn] = useState('');

  const handleInput = e => {
    e.target.value ? setClassOfBtn('blue') : setClassOfBtn('');
    if (e.keyCode === 13) uploadComment();
    setCurrInputVal(e.target.value);
  };

  const uploadComment = e => {
    e.preventDefault();
    addedCommentVal.push({
      userId: 'userid',
      value: currInputVal,
      time: '방금전',
    });
    setCommentVal(addedCommentVal);
  };

  return (
    <div className="main">
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
            />
            <button className={classOfBtn} onClick={uploadComment}>
              게시
            </button>
          </form>
        </article>
      </div>
      <div className="main-right">
        <div className="user">
          <span>&gt;wecode</span>
          <span>wecode_bootcamp</span>
          <span>WeCode | 위코드</span>
        </div>
        <div className="stories">
          <span>스토리</span>
          <span>모두보기</span>
          <ul>
            <li>
              <img src="images/hyeonze/user1.jpg" alt="" />
              <div>
                <span>user1</span>
                <span>1시간전</span>
              </div>
            </li>
            <li>
              <img src="images/hyeonze/user2.jpg" alt="" />
              <div>
                <span>user2</span>
                <span>2시간전</span>
              </div>
            </li>
            <li>
              <img src="images/hyeonze/user3.jpg" alt="" />
              <div>
                <span>user3</span>
                <span>3시간전</span>
              </div>
            </li>
            <li>
              <img src="images/hyeonze/user4.jpg" alt="" />
              <div>
                <span>user4</span>
                <span>4시간전</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="recommended">
          <span>회원님을 위한 추천</span>
          <span>모두보기</span>
          <ul>
            <li>
              <img src="images/hyeonze/user5.jpg" alt="" />
              <div>
                <span>user5</span>
                <span>user님 외 2명이 ...</span>
                <span>팔로우</span>
              </div>
            </li>
            <li>
              <img src="images/hyeonze/user6.jpg" alt="" />
              <div>
                <span>user6</span>
                <span>user님 외 2명이 ...</span>
                <span>팔로우</span>
              </div>
            </li>
            <li>
              <img src="images/hyeonze/user7.jpg" alt="" />
              <div>
                <span>user7</span>
                <span>user님 외 2명이 ...</span>
                <span>팔로우</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="main-right-copy">
          <span>
            <span>Instagram 정보</span> &middot; <span>지원</span> &middot;
            <span>홍보 센터</span> &middot; <span>API</span> &middot;
            <span>채용 정보</span> &middot; <span>개인정보 처리방침</span>
            &middot; <span>약관</span> &middot; <span>디렉터리</span>
            &middot; <span>프로필</span> &middot; <span>해시태그</span>
            &middot; <span>언어</span>
          </span>
          <span>&copy; 2019 INSTAGRAM</span>
        </div>
      </div>
    </div>
  );
};

const Comment = ({ commentVal }) => {
  // const [comments, setComments] = useState(props.commentVal);

  return (
    <>
      {commentVal.map((el, i) => {
        return (
          <span key={i}>
            <strong>{commentVal[i].userId} </strong>
            {commentVal[i].value}
            <small> {commentVal[i].time}</small>
            <AiFillDelete className="delete" />
            <AiOutlineHeart className="hearts" />
          </span>
        );
      })}
    </>
  );
};

export default Main;
