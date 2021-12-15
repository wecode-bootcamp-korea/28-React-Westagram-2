import React from 'react';
import './Main.scss';
import '../../../styles/common.scss';
// import instagram from '../../../../public/images/daeyeong/images/instagram.png';
// import daeyeong from '../../../../public/images/daeyeong/images/dae-yeong.png';
// import sprint from '../../../../public/images/daeyeong/images/sprint.jpg';
// import wecode from '../../../../public/images/daeyeong/images/wecode.png';
// import sun from '../../../../public/images/daeyeong/images/sun.jpeg';
// import piece from '../../../../public/images/daeyeong/images/piece.jpeg';
// import champ from '../../../../public/images/daeyeong/images/champ.jpeg';

function MainDaeyeong() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css"
      />

      <main>
        <div className="feeds">
          <article>
            <div className="user_component">
              <div>
                <img
                  src="/images/daeyeong/images/dae-yeong.png"
                  className="user_avatar"
                  alt="사진"
                />
              </div>
              <div>
                <h4>Daeyeong_Yang</h4>
                <div>3시간 전</div>
              </div>
              <div className="dots_icon">
                <i className="fas fa-ellipsis-h" />
              </div>
            </div>

            <img
              className="run"
              src="https://images.unsplash.com/photo-1502224562085-639556652f33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cnVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt="사진"
            />

            <div className="article_bottom">
              <div className="feed_icons">
                <i className="fas fa-heart" />
                <i className="far fa-comments" />
                <i className="fas fa-upload" />
                <i className="far fa-bookmark" />
              </div>
              <div className="total_like">
                <img
                  className="user_like"
                  src="https://media.istockphoto.com/photos/portrait-of-young-girl-with-clean-skin-and-soft-makeup-picture-id1265032285?b=1&k=20&m=1265032285&s=170667a&w=0&h=OWZ3aJU0WlcQ9xrty1kitR03WE4bx3yPiItwLNa_i50="
                  alt="사진"
                />
                <div>Maria Levankoski님 외 1,939명이 좋아합니다.</div>
              </div>

              <div>
                <div className="comment">
                  <span>Daeyeong_Yang</span>
                  <span> 오늘도 런닝을 하였다...</span>
                  <span>더 보기</span>
                </div>

                <div className="comment">
                  <span>우리는미생이다</span>
                  <span> 우리는 반드시 해낼 것이다!</span>
                </div>
                <div className="time_comment">42분 전</div>
              </div>
            </div>

            <div className="westa_user_comment">
              <input
                className="input_comment"
                type="text"
                placeholder="댓글 달기..."
              />
              <button className="comment_btn">게시</button>
            </div>
          </article>
        </div>

        <aside>
          <div className="aside_header">
            <div>
              <img
                src="/images/daeyeong/images/dae-yeong.png"
                className="user_avatar2"
                alt="사진"
              />
            </div>
            <div clclassNameass="aside_name">
              <h4>Daeyeong_Yang</h4>
              <div>Googler</div>
            </div>
          </div>

          <div className="user_box1">
            <div className="aside_story">
              <span>스토리</span>
              <span>모두 보기</span>
            </div>

            <div className="img_users">
              <div>
                <img src="/images/daeyeong/images/sprint.jpg" alt="사진" />
              </div>

              <div>
                <div className="user_names">달린다</div>
                <div>12시간 전</div>
              </div>

              <div className="user_follow">팔로우</div>
            </div>

            <div className="img_users">
              <div>
                <img src="/images/daeyeong/images/wecode.png" alt="사진" />
              </div>

              <div>
                <div className="user_names">wecode</div>
                <div>2시간 전</div>
              </div>
              <div className="user_follow">팔로우</div>
            </div>

            <div className="img_users">
              <div>
                <img src="/images/daeyeong/images/sun.jpeg" alt="사진" />
              </div>

              <div>
                <div className="user_names">윤하가짱</div>
                <div>5시간 전</div>
              </div>
              <div className="user_follow">팔로우</div>
            </div>
          </div>

          <div className="user_box1">
            <div className="aside_story">
              <span>회원님을 위한 추천</span>
              <span>모두 보기</span>
            </div>

            <div className="img_users">
              <div>
                <img src="/images/daeyeong/images/sprint.jpg" alt="사진" />
              </div>
              <div>
                <div className="user_names">달린다</div>
                <div>BTS님 외에 360명이...</div>
              </div>
              <div className="user_follow">팔로우</div>
            </div>

            <div className="img_users">
              <div>
                <img src="/images/daeyeong/images/piece.jpeg" alt="사진" />
              </div>

              <div>
                <div className="user_names">위피스</div>
                <div>아이유님 외에 12명이...</div>
              </div>
              <div className="user_follow">팔로우</div>
            </div>

            <div className="img_users">
              <div>
                <img src="/images/daeyeong/images/champ.jpeg" alt="사진" />
              </div>

              <div>
                <div className="user_names">we_are_the_champ</div>
                <div>youcan'tseeme님 외에 120명이...</div>
              </div>
              <div className="user_follow">팔로우</div>
            </div>
          </div>

          <div className="insta_agreement">
            <p>
              Westagram 정보 &middot; 지원 &middot; 홍보 센터 &middot; API
              &middot;
              <br />
              채용정보 &middot; 개인정보처리방침 &middot; 약관 &middot; 디렉터리
              &middot; 프로필 &middot; <br />
              해시태그 &middot; 언어 <br />
              &copy; 2019 WESTAGRAM
            </p>
          </div>
        </aside>
      </main>
    </>
  );
}

export default MainDaeyeong;
