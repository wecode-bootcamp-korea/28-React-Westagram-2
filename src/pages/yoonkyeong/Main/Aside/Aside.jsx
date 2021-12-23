import React from 'react';
import './Aside.scss';
export default function Aside() {
  return (
    <aside>
      <div className="userInformation">
        <div className="userImage">
          <img alt="face" src="images/yoonkyeong/face-crop.jpg" />
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
        소개 · 도움말 · 홍보 · 센터 · API · 채용정보 · 개인정보처리방침 · 약관 ·
        위치 · 인기계정 · 해시태그 · 언어
        <br /> © 2021 INSTAGRAM FROM META
      </div>
    </aside>
  );
}
