import React from 'react';
import { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  // 링크
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-hyeonze');
  };

  // 사용자 데이터 저장 && 버튼활성화
  const [idInput, setIdInput] = useState('');
  const [pwInput, setPwInput] = useState('');
  const [activateBtn, setActivateBtn] = useState(false);
  const [isValidatedId, setIsValidatedId] = useState(false);
  const [isValidatedPw, setIsValidatedPw] = useState(false);

  const changeIdInput = e => {
    setIdInput(e.target.value);
  };

  const changePwInput = e => {
    setPwInput(e.target.value);
  };

  useEffect(() => {
    idInput.indexOf('@') !== -1
      ? setIsValidatedId(true)
      : setIsValidatedId(false);
    pwInput.length > 4 ? setIsValidatedPw(true) : setIsValidatedPw(false);
    isValidatedId && isValidatedPw
      ? setActivateBtn(true)
      : setActivateBtn(false);
  }, [idInput, pwInput, isValidatedId, isValidatedPw]);

  return (
    <div className="login">
      <div id="wrapper">
        <h1>westagram</h1>
        <form className="login_form">
          <input
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            className="username"
            onChange={changeIdInput}
          />
          <input
            type="password"
            placeholder="비밀번호"
            className="userpassword"
            onChange={changePwInput}
          />
          {/* <Link to="/main">로그인</Link> */}
          <input
            className={activateBtn ? 'blue' : ''}
            disabled={activateBtn ? false : true}
            type="button"
            value="로그인"
            onClick={goToMain}
          />
        </form>
        <p>비밀번호를 잊으셨나요?</p>
      </div>
    </div>
  );
};

export default Login;
