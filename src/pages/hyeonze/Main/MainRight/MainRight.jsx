import React from 'react';
import './MainRight.scss';

export default function MainRight() {
  return (
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
  );
}
