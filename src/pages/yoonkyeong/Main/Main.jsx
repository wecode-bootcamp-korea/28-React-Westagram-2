import React, { useState } from 'react';
import '../Main/Main.scss';
import {
  BiHeart,
  BiMessageRounded,
  BiPaperPlane,
  BiBookmark,
  BiSmile,
  BiDotsHorizontalRounded,
  BiUserCircle,
  BiX,
} from 'react-icons/bi';

export default function MainYoonkyeong() {
  const [comment, setComment] = useState('');
  const [replies, setReplies] = useState([]);

  const inputCommemt = e => {
    setComment(e.target.value);
  };
  const inputComment = e => {
    const add = replies;
    if (comment.length > 1) {
      add.push(comment);
    }
    setReplies(replies);
    setComment(' ');
  };
  // 이렇게 짜면 리플들이 여러개 원하는 형식으로 들어오긴 하는데요, 첫번째 코멘트가 안들
  const pressClick = e => {
    inputComment();
    console.log(comment, replies);
  };
  const pressEnter = e => {
    if (e.key === 'Enter') {
      inputComment();
      console.log(comment, replies);
    }
  };
  const validateInput = e => {
    return comment.length > 1 ? false : true;
  };

  const userName = 'Dummie';
  return (
    <main>
      <div className="feeds">
        <div className="article">
          <div className="articleHeader">
            <div className="publisherProfile">
              <div className="publisherImage">
                <img
                  src="/images/yoonkyeong/angrycat-crop.jpg"
                  alt="angrycat"
                />
              </div>
              <div className="publisherId">user_name_angry_cat49</div>
            </div>
            <BiDotsHorizontalRounded size="30" />
          </div>
          <div className="articleWrapper">
            <img
              className="articleImage"
              src="images/yoonkyeong/chorong-crop.jpg"
              alt="chorong"
            />
          </div>
          <div className="articleIconsWrapper">
            <BiHeart size="34" />
            <BiMessageRounded size="34" />
            <BiPaperPlane size="34" />
            <BiBookmark size="34" className="bookmark" />
          </div>
          <div className="likeWrapper">
            <b>나</b>님 <b>외 10명</b>이 좋아합니다
          </div>
          <div className="commentWrapper">
            <ul className="repliy">
              {replies.map(x => (
                <li className="submittedComment">
                  <BiUserCircle />
                  <span className="userName">{userName}</span>
                  {x}
                  <BiX className="deleteComment" />
                  <BiHeart className="likeThisComment" />
                </li>
              ))}
            </ul>
          </div>
          <div className="timeWrapper">42분 전</div>
          <div className="commentInputWapper">
            <BiSmile size="35" />
            <input
              className="commentInputText"
              type="text"
              name="comment"
              placeholder="댓글 달기..."
              onChange={inputCommemt}
              onKeyPress={pressEnter}
              value={comment}
            />
            <input
              className="commentInputButton"
              type="button"
              disabled={validateInput() ? true : false}
              onClick={pressClick}
              value="게시"
            />
          </div>
        </div>
      </div>
      <aside>
        <div className="userInformation">
          <div className="userImage">
            <img src="images/yoonkyeong/face-crop.jpg" alt="face" />
          </div>
          <div className="userText">
            <div className="userId">nyangstar_king</div>
            <div className="userNickname">chorong | 초롱</div>
          </div>
        </div>
        <div className="story">
          <div className="storyHeader">
            <div className="storyTitle">스토리</div>
            <div className="allStory">모두보기</div>
          </div>
          <div className="storyUserList">
            <div className="userInformation">
              <div className="userImage">
                <img src="images/yoonkyeong/cat1.jpg" alt="face" />
              </div>
              <div className="userText">
                <div className="userId">cat_1_cat</div>
                <div className="userNickname">time</div>
              </div>
            </div>
            <div className="userInformation">
              <div className="userImage">
                <img src="images/yoonkyeong/cat2.jpg" alt="face" />
              </div>
              <div className="userText">
                <div className="userId">cat_2_cat</div>
                <div className="userNickname">time</div>
              </div>
            </div>
            <div className="userInformation">
              <div className="userImage">
                <img src="images/yoonkyeong/cat3.jpg" alt="face" />
              </div>
              <div className="userText">
                <div className="userId">cat_3_cat</div>
                <div className="userNickname">time</div>
              </div>
            </div>
            <div className="userInformation">
              <div className="userImage">
                <img src="images/yoonkyeong/cat4.jpg" alt="face" />
              </div>
              <div className="userText">
                <div className="userId">cat_4_cat</div>
                <div className="userNickname">time</div>
              </div>
            </div>
          </div>
        </div>
        <div className="recommendation">
          <div className="recommendationHeader">
            <div className="recommendationForYou">회원님을 위한 추천</div>
            <div className="allRecommendation">모두보기</div>
          </div>
          <div className="recommendedPeople">
            <div className="userInformation">
              <div className="userImage">
                <img src="images/yoonkyeong/cat5.jpg" alt="face" />
              </div>
              <div className="userText">
                <div className="userId">famous_cat_5_cat</div>
                <div className="userNickname">time</div>
              </div>
              <div className="follow">팔로우</div>
            </div>
            <div className="userInformation">
              <div className="userImage">
                <img src="images/yoonkyeong/cat6.jpg" alt="face" />
              </div>
              <div className="userText">
                <div className="userId">famous_cat_6_cat</div>
                <div className="userNickname">time</div>
              </div>
              <div className="follow">팔로우</div>
            </div>
            <div className="userInformation">
              <div className="userImage">
                <img src="images/yoonkyeong/cat7.jpg" alt="face" />
              </div>
              <div className="userText">
                <div className="userId">famous_cat_7_cat</div>
                <div className="userNickname">time</div>
              </div>
              <div className="follow">팔로우</div>
            </div>
          </div>
        </div>
        <div className="footer">
          소개 · 도움말 · 홍보 · 센터 · API · 채용정보 · 개인정보처리방침 · 약관
          · 위치 · 인기계정 · 해시태그 · 언어
          <br /> © 2021 INSTAGRAM FROM META
        </div>
      </aside>
    </main>
  );
}
