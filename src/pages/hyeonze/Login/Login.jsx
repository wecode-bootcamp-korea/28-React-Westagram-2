import React from 'react';
// import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-hyeonze');
  };

  return (
    <div className="login">
      <div id="wrapper">
        <h1>westagram</h1>
        <div className="login_form">
          <input
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            className="username"
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="userpassword"
          />
          {/* <Link to="/main">로그인</Link> */}
          <span onClick={goToMain}>로그인</span>
        </div>
        <p>비밀번호를 잊으셨나요?</p>
      </div>
    </div>
  );
};

export default Login;
