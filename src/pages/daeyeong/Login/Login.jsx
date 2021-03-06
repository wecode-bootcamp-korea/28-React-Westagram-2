import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.scss';
import '../../../styles/common.scss';

function LoginDaeyeong() {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-daeyeong');
  };

  return (
    <main className="login_main">
      <div className="login_wrapper">
        <div className="login_logo">
          <h1>Westagram</h1>
        </div>
        <div className="login_container">
          <input
            className="login_email"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />

          <input type="password" className="login_pw" placeholder="비밀번호" />
          <div>
            <button onClick={goToMain} className="login_btn">
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
