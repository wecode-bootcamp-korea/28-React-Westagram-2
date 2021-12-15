import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [active, setActive] = useState(false);

  const validateInput = () => {
    if (email.includes('@') && password.length >= 6) setActive(_ => true);
    else setActive(_ => false);
  };

  const handleEmail = e => {
    setEmail(e.target.value);
  };

  const handlePwd = e => {
    setPassword(_ => e.target.value);
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
        />
        <input
          type="password"
          placeholder="비밀번호"
          data-type="password"
          onChange={handlePwd}
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

      <button
        href="https://www.instagram.com/accounts/signup/"
        className="fa-login"
      >
        <img
          src="/images/joonyoung/facebook.png"
          alt="facebook image"
          id="facebook-img"
        />
        <span>Facebook으로 로그인</span>
      </button>
      <a
        href="https://www.instagram.com/accounts/password/reset/"
        className="forgot-password"
        target="_blank"
      >
        비밀번호를 잊으셨나요?
      </a>
    </section>
  );
};

export default Login;
