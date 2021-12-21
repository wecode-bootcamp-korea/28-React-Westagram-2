import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [active, setActive] = useState(false);

  const validateInput = () => {
    if (email.includes('@') && password.length >= 5) setActive(true);
    else setActive(false);
  };

  const handleEmail = e => {
    setEmail(e.target.value);
  };

  const handlePwd = e => {
    setPassword(e.target.value);
  };

  const goToMainByEnter = e => {
    if (e.key === 'Enter') goToMain();
  };

  const goToMain = () => {
    if (!active) return;
    navigate('/main-joonyoung');
  };

  useEffect(() => {
    validateInput();
  }, [email, password]);

  return (
    <section className="login">
      <h1>Westagram</h1>
      <section className="login__form">
        <input
          type="email"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          data-type="email"
          onChange={handleEmail}
          onKeyDown={goToMainByEnter}
        />
        <input
          type="password"
          placeholder="비밀번호"
          data-type="password"
          onChange={handlePwd}
          onKeyDown={goToMainByEnter}
        />
        <button
          className={`login__formBtn ${active ? 'active' : ''}`}
          onClick={goToMain}
        >
          로그인
        </button>
      </section>

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
