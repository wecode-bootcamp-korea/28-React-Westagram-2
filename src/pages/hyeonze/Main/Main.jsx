import React from 'react';
import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineComment,
  AiOutlineUpload,
} from 'react-icons/ai';
import { GrBookmark } from 'react-icons/gr';
import './Main.scss';

const Main = () => {
  return (
    <div className="main">
      <div className="nav_color" />
      <div id="wrap">
        <div className="nav_wrap">
          <nav>
            <div className="logo">
              <i className="fab fa-instagram" />
              <span>westagram</span>
            </div>
            <div className="search_container">
              <input type="text" placeholder="검색" className="search_bar" />
              <div className="suggestions_cap">
                <div className="suggestions_container">
                  <ul className="suggestions_list">
                    <li>
                      <img src="images/hyeonze/profile.jpg" alt="" />
                      <div className="uservalue">
                        <p className="userid">userid</p>
                        <p className="usernickname">usernickname</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="btns">
              <span>
                <img
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                  alt="탐색"
                />
              </span>
              <span>
                <img
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                  alt="하트"
                />
              </span>
              <span>
                <img
                  src="images/hyeonze/user.jpg"
                  alt="마이페이지"
                  className="profile"
                />
                <ul className="profile_menu">
                  <li>
                    <i className="far fa-user-circle" />
                  </li>
                  <li>
                    <i className="far fa-bookmark" />
                    저장됨
                  </li>
                  <li>
                    <i className="fas fa-cog" />
                    설정
                  </li>
                  <li>로그아웃</li>
                </ul>
              </span>
            </div>
          </nav>
        </div>
        <main>
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
                  {/* <i className="fas fa-heart" /> */}
                  <AiFillHeart className="" />
                </span>
                <span>
                  {/* <i className="far fa-comment" /> */}
                  <AiOutlineComment className="" />
                </span>
                <span>
                  {/* <i className="fas fa-upload" /> */}
                  <AiOutlineUpload className="" />
                </span>
                <span>
                  {/* <i className="far fa-bookmark" /> */}
                  <GrBookmark className="" />
                </span>
              </div>
              <div className="comments">
                <span>4 Likes</span>
                <span>
                  <strong>canon_mj </strong>위워크에서 진행한 베이킹 클래스...
                  <small> 더보기</small>
                </span>
                <span>
                  <strong>neceosecius </strong>거봐 좋았잖아~~~~
                  <small> 42분전</small>
                  {/* <i className="far fa-heart hearts" /> */}
                  <AiOutlineHeart className="hearts" />
                </span>
              </div>
              <div className="add_comments">
                <input
                  type="text"
                  placeholder="댓글 달기..."
                  className="input_upload"
                />
                <button className="btn_upload">게시</button>
              </div>
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
                <span>Instagram 정보</span> &middot; <span>지원</span> &middot;{' '}
                <span>홍보 센터</span> &middot; <span>API</span> &middot;{' '}
                <span>채용 정보</span> &middot; <span>개인정보 처리방침</span>{' '}
                &middot; <span>약관</span> &middot; <span>디렉터리</span>{' '}
                &middot; <span>프로필</span> &middot; <span>해시태그</span>{' '}
                &middot; <span>언어</span>
              </span>
              <span>&copy; 2019 INSTAGRAM</span>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Main;
