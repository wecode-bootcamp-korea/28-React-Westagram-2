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

  // const signup = () => {
  //   fetch('http://10.58.5.56:8080/users/signin', {
  //     method: 'post',
  //     body: JSON.stringify({
  //       email: id,
  //       password: password,
  //       username: 'JUN',
  //     }),
  //   })
  //     .then(res => res.json())
  //     .then(result => {
  //       if (result.message === 'SUCCESS') {
  //         console.log(result.token);
  //         alert('성공');
  //       }
  //     });
  // }; 로그인시 토큰 확인용

  const onKeyPress = e => {
    if (e.key === 'Enter') goToMain();
  };

  const handleIdInput = e => {
    setId(e.target.value);
  };
  const handlePasswordInput = e => {
    setPassword(e.target.value);
  };
  const checkCondition = () => {
    return (id.includes('@') && password.length) >= 5 ? true : false;
  };

  // useEffect(() => {
  //   window.addEventListener("");
  //   return () => window.removeEventListener()
  // }, [])
  //창에 접근해서 이벤트를 거는 방법;

  return (
    <div className="login">
      <div className="logoWrapper">
        <h1>Westagram</h1>
      </div>
      <div className="loginWrapper">
        <input
          type="text"
          id="idInput"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={handleIdInput}
          onKeyUp={checkCondition}
          onKeyPress={onKeyPress}
        />
        <input
          type="password"
          id="passwordInput"
          placeholder="비밀번호"
          onChange={handlePasswordInput}
          onKeyUp={checkCondition}
          onKeyPress={onKeyPress}
        />
        <button
          className={checkCondition() ? 'validBtn' : 'unvalidBtn'}
          disabled={checkCondition() ? false : 'disabled'}
          onClick={goToMain}
        >
          로그인
        </button>
        <div className="forgetPassword"> 비밀번호를 잊으셨나요? </div>
      </div>
    </div>
  );
}
