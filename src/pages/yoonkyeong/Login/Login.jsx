import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

export default function LoginYoonkyeong() {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-yoonkyeong');
  };
  return (
    <div className="login">
      <div className="logoWrapper">
        <h1>Westagram</h1>
      </div>
      <div className="loginWrapper">
        <input
          type="text"
          id="idInput"
          name="id"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <input
          type="password"
          id="passwordInput"
          name="password"
          placeholder="비밀번호"
        />
        <input type="button" id="btnLogin" onClick={goToMain} value="로그인" />
        <div className="forgotPassword">비밀번호를 잊으셨나요?</div>
      </div>
    </div>
  );
}
