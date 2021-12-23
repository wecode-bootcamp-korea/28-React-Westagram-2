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
      idValue.includes('@') && pwValue.length >= 5 ? 'blue' : '#c0dffd'
    );
  }

  const signIn = () => {
    fetch('http://10.58.5.84:8000/users/register', {
      method: 'POST',
      body: JSON.stringify({
        email: idValue,
        password: pwValue,
      }),
    })
      .then(response => response.json())
      .then(result => console.log('결과: ', result));
  };

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
              onClick={signIn}
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
