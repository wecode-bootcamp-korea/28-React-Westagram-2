import React, { useState } from 'react';
import './Main.scss';
import '../../../styles/common.scss';

function MainDaeyeong() {
  //input에 입력한 값이 commentValue여기에 저장됨
  const [commentValue, updateComment] = useState('');
  // const [commentValue, setCommentValue] = useState('');

  //[{ name: '', comment: '' }]을 초기값으로 하는 형태를 listComments 저장한다.(state)
  const [listComments, setListComments] = useState([{ name: '', comment: '' }]);

  //input에서 값의 변화가 일어나면 아래의 함수를 실행한다. event 값을 감지하고 그것을 updateComment에 보낸다.
  function handleCommentInput(event) {
    updateComment(event.target.value);
  }

  // Comment (name, commentValue) 형태
  // {name: '값', commentValue: '값' }
  const Comment = props => {
    // console.log(props);
    return (
      <div className="comment">
        <span>{props.name}</span>
        <span> {props.comment}</span>
        {/* <span>42분</span> */}
        {/* <span>더 보기</span> */}
      </div>
    );
  };

  //uploadComment함수는 실행되면
  //listComments를 spread 전개구문 복사해서 newlistComments에 담는다. 왜냐하면 state를 직접적으로 수정해서는 안되기 떄문
  //newlistComments에 { name: 'testID', comment: commentValue(input에 담긴 값) } push 해준다.
  //값이 최종 변경된 newlistComments를 listComments에 넣어서 state가 간접적으로 변경되게 한다.

  //이벤트처리는 한 태그에 한번만사용 가능 그러므로 이 안에서 다 처리해야 함
  function uploadComment() {
    let newlistComments = [...listComments];
    newlistComments.push({ name: 'testID', comment: commentValue });
    setListComments(newlistComments);
    console.log(`uploadComment ${newlistComments}, ${listComments}`);
    updateComment('');
  }

  console.log('render');
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
                {/* 변경된 값이 담긴 listComments에 map을 해준다.(배열 내의 모든 요소 가각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열로 반환) */}
                {/* listComment는 내가 지정한 인자이다. 이 인자는 배열 내의 { name: '', comment: '' }이다. */}
                {/* Comment component를 써서 부른다. 단, name key의 값은 listComment.name이고 comment의 key값은 listComment.comment이다. */}
                <div>
                  {listComments.map(listComment => (
                    <Comment
                      name={listComment.name}
                      comment={listComment.comment}
                    />
                  ))}
                </div>
                {/*  listComment = {name, commentValue} */}
              </div>
            </div>

            <div className="westa_user_comment">
              {/* input에서 변화가 일어나면  handleCommentInput 실행한다. */}

              {/* <input> 태그의 value 속성은 <input> 요소의 초깃값(value)을 명시합니다. */}
              {/* value로 input 태그의 초기값으로 commentValue를 준다. 그리고 input에 담긴 값을 처리한 후에, 
              다시 value에 commentValue에 ''을 줌으로서 
              input 태그를 초기화 한다.(uploadComment) */}
              <input
                onChange={handleCommentInput}
                className="input_comment"
                type="text"
                value={commentValue}
                placeholder="댓글 달기..."
              />

              {/* 버튼을 클릭하면 uploadComment 함수를 실행 */}
              <button className="comment_btn" onClick={uploadComment}>
                게시
              </button>
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
            <div className="aside_name">
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
