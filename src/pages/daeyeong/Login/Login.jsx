import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.scss';
import '../../../styles/common.scss';

function LoginDaeyeong() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-daeyeong');
  };

  const [idValue, saveIdData] = useState('');
  // console.log(idValue);

  //1. idValue에 @가 포함되어 있는가? 를 확인하는 코드
  //2. pwValue가 5글자 이상인지? 를 확인하는 코드
  //삼항 연산자를 이용해서 1번과 2번 조건이 맞으면 버튼 색상이 변하게 하는 코드

  function handleIdInput(event) {
    saveIdData(event.target.value);
    // console.log(event.target.value);
  }

  const [pwValue, savePwData] = useState('');
  // console.log(pwValue);

  function handlePwInput(event) {
    savePwData(event.target.value);
    // console.log(event.target.value);
  }

  const [btnColorActive, btnColorChange] = useState('#c0dffd');

  function btnStatusChange(event) {
    btnColorChange(
      idValue.includes('@') && pwValue.length > 4 ? 'blue' : '#c0dffd'
    );
  }

  console.log(btnColorActive);

  return (
    <main className="login_main">
      <div className="login_wrapper">
        <div className="login_logo">
          <h1>Westagram</h1>
        </div>
        <div className="login_container" onChange={btnStatusChange}>
          <input
            onChange={handleIdInput}
            className="login_email"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />

          <input
            onChange={handlePwInput}
            type="password"
            className="login_pw"
            placeholder="비밀번호"
          />
          <div>
            <button
              style={{ backgroundColor: btnColorActive }}
              onClick={goToMain}
              className="login_btn"
            >
              로그인
            </button>
          </div>
        </div>

        <footer className="passwordfind_link">
          <a href="#">비밀번호를 잊으셨나요?</a>
        </footer>
      </div>
    </main>
  );
}

export default LoginDaeyeong;
