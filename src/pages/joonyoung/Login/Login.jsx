import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isValid = email.includes('@') && password.length >= 5 ? 'active' : '';

  const goToMainByEnter = e => {
    if (e.key === 'Enter') goToMain();
  };

  const goToMain = () => {
    if (!isValid) return;
    navigate('/main-joonyoung');
  };

  return (
    <section className="login__joonyoung">
      <h1>Westagram</h1>
      <form className="login__form">
        <input
          type="email"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={e => setEmail(e.target.value)}
          onKeyDown={goToMainByEnter}
        />
        <input
          type="password"
          placeholder="비밀번호"
          onChange={e => setPassword(e.target.value)}
          onKeyDown={goToMainByEnter}
        />
        <button className={`login__formBtn ${isValid}`} onClick={goToMain}>
          로그인
        </button>
      </form>

      <div className="divider">
        <span>또는</span>
      </div>

      <button className="fa-login">
        <img
          src="/images/joonyoung/facebook.png"
          alt="facebook"
          id="facebook-img"
        />
        <span>Facebook으로 로그인</span>
      </button>
      <a
        href="https://www.instagram.com/accounts/password/reset/"
        className="forgot-password"
        target="_blank"
        rel="noreferrer"
      >
        비밀번호를 잊으셨나요?
      </a>
    </section>
  );
};

export default Login;
