import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

export default function LoginYoonkyeong() {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-yoonkyeong');
  };

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const handleIdInput = e => {
    setId(e.target.value);
    // console.log(id);
    // 여기서 콘솔을 찍어서 value가 아이디값으로 들어오는 걸 보고싶었는데, 한줄 늦게 콘솔이 찍힙니다.
  };
  const handlePasswordInput = e => {
    setPassword(e.target.value);
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
          onChange={handleIdInput}
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <input
          type="password"
          id="passwordInput"
          onChange={handlePasswordInput}
          placeholder="비밀번호"
        />
        <input type="button" id="btnLogin" onClick={goToMain} value="로그인" />
        <div className="forgotPassword">비밀번호를 잊으셨나요?</div>
      </div>
    </div>
  );
}
