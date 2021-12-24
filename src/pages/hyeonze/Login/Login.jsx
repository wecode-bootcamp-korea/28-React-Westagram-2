import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  // 사용자 데이터 저장 && 버튼활성화
  const [idInput, setIdInput] = useState('');
  const [pwInput, setPwInput] = useState('');
  const [activateBtn, setActivateBtn] = useState(false);
  const [isValidatedId, setIsValidatedId] = useState(false);
  const [isValidatedPw, setIsValidatedPw] = useState(false);

  // 링크
  const navigate = useNavigate();

  // 메인으로 이동할 때 로직
  const goToMain = () => {
    navigate('/main-hyeonze');
  };

  const changeIdInput = e => {
    const { value } = e.target;
    setIdInput(value);
  };

  const changePwInput = e => {
    const { value } = e.target;
    setPwInput(value);
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

  // 회원가입시 사용할 로직
  // const signup = () => {
  //   fetch('http://10.58.4.22:8000/users/signup', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       email: idInput,
  //       password: pwInput,
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(result => {
  //       //console.log('결과: ', result.message)
  //       if (result.message === 'EMAIL_ALREADY_EXISTS') {
  //         console.log('Error : Duplicated');
  //       }
  //     });
  // };

  // 로그인시 사용할 로직
  // const login = () => {
  //   fetch('http://10.58.4.22:8000/users/login', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       email: idInput,
  //       password: pwInput,
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(result => {
  //       //console.log('결과: ', result.message)
  //       if (result.message === 'SUCCESS') {
  //         console.log('login SUCCESS');
  //       }
  //     });
  // };

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
          <input
            // className={activateBtn ? 'blue' : ''}
            className={activateBtn && 'blue'}
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
