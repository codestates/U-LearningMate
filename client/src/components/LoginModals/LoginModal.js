import { useState, useRef } from 'react';
import { Link, Redirect } from "react-router-dom";
import styled from 'styled-components';
import axios from "axios";
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import { useGoogleLogin } from 'react-google-login'
import loginicon from '../../icons/Login-icon.png';

const RowGroup = styled.div`
  font-family: Dotum, "돋움", Helvetica, sans-serif;
  font-size: 12px;
  min-width: 220px;
  max-width: 30%;
  margin: 10px auto;
  /* border: red solid; */
`;

const Title = styled.h3`
  margin: 19px 0 8px;
  font-size: 14px;
  font-weight: 700;
`;

const Box = styled.input`
  display: block;
  position: relative;
  width: 100%;
  height: 51px;
  border: solid 1px #dadada;
  padding: 10px 110px 10px 14px;
  box-sizing: border-box;
`;

const LoginBtn = styled.button`
  display: block;
  background: #000;
  color: #eee;
  width: 100%;
  height: 51px;
  margin: 19px 0 8px;
  text-decoration: none;
  &:hover {
    background: #ffffff;
    text-decoration: underline;
    color: #000;
  }
`;

const JoinBtn = styled.button`
  display: block;
  background: #ffffff;
  border: 1px solid #000;
  width: 100%;
  height: 51px;
  margin: 19px 0 8px;
  text-decoration: none;
  &:hover {
    background: #aaa;
    text-decoration: underline;
  }
`;

const ModalContainer = styled.div`
// TODO : Modal을 구현하는데 전체적으로 필요한 CSS를 구현합니다.
  display: flex;
  justify-content: center;
  height: 50px;
  /* padding: 10px; */
  align-items: center;
  /* border: green solid */
`;

const ModalBackdrop = styled.div`
 // TODO : Modal이 떴을 때의 배경을 깔아주는 CSS를 구현합니다.
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.4);
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    /* border: blue solid */
`;

export const ModalBtn = styled.button`
  text-decoration: none;
  /* position: absolute; */
  /* align-items: center; */
  box-sizing: border-box;
  border: none;
  margin: 16px 0px 0px 0;
  padding: 0;
  border-radius: 5px;
  cursor: grab;
  height:100%;
  width:100%;
  /* overflow:hidden; */
  /* line-height:10px; */
  /* vertical-align:top; */
  /* border: violet solid; */
  background-color: transparent;
  /* background-size: cover; */
`;

const ModalView = styled.div.attrs(props => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
  role: 'dialog'
}))`
// TODO : Modal창 CSS를 구현합니다.
display: flex;
justify-content: center;
align-items: center;
background-color: white;
border: none;
border-radius: 10px;
color: black;
width: 1200px;
height: 600px; 
position: absolute;
left: 50%;
top:50%;
transform: translate(-50%, -50%);
z-index:100;
border: grey 1px solid;
box-shadow: 3px 3px 3px 3px gray;
`;
const loginicon1 = styled.img`
  src : loginicon;
  position: absolute;
  width: 100%;
  /* height: 100%; */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const LoginModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignup,setIsSignup] = useState(true);
  const [isLogin,setIsLogin] = useState(false);

  const outSection = useRef();
  const handleLogin = () => {setIsLogin(!isLogin);setIsOpen(!isOpen);};
  const handleSignup = () => {setIsSignup(!isSignup)};
  const openModalHandler = () => {
    // TODO : isOpen의 상태를 변경하는 메소드를 구현합니다.
    setIsOpen(!isOpen)
  };
  const { signIn, loaded } = useGoogleLogin({
  });

const responseGoogle = (response) => {
  setIsOpen(!isOpen);
  console.log("response",response);
}

  return (
    <>
      <ModalContainer>
        <ModalBtn 
        // TODO : 클릭하면 Modal이 열린 상태(isOpen)를 boolean 타입으로 변경하는 메소드가 실행되어야 합니다. 
        onClick={()=>{openModalHandler()}}
        >
        {<img src={loginicon} width="50"/>}
        </ModalBtn>
        { isOpen === true ? 
            <ModalBackdrop 
            ref={outSection}
            onClick={e=>{if(outSection.current === e.target){openModalHandler()}}} > 
            <ModalView onClick={(e) => e.stopPropagation()}>
            <RowGroup>
                <Title>이메일</Title>
                <Box
                    type="email"
                    id="email"
                    title="email"
                    maxlength="30"
                    class="int"
                    placeholder="이메일"
                    onChange={(e)=>{console.log(e.target.value)}}
                ></Box>
                <Title>비밀번호</Title>
                <Box
                    type="password"
                    id="password"
                    title="password"
                    maxlength="20"
                    class="int"
                    placeholder="비밀번호"
                    onChange={(e)=>{console.log("비밀번호",e.target.value)}}
                ></Box>

                <div className="alert-box">errorMessage</div>

                <Link to="/main">
                    <LoginBtn onClick={handleLogin}>LOGIN</LoginBtn>
                </Link>
                <JoinBtn onClick={handleSignup}>회원가입</JoinBtn>
                <GoogleLogin
                clientId="133857767007-bbfmnq7mf9t27c3ugkm10ukf0l5cgqdb.apps.googleusercontent.com"
                buttonText="구글로 LOGIN 시작하기"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                />
            </RowGroup>
            {isSignup === true?null:<RowGroup>
            <Title>이메일</Title>
                <Box
                    type="email"
                    id="email"
                    title="email"
                    maxlength="30"
                    class="int"
                    placeholder="이메일"
                    onChange={(e)=>{console.log(e.target.value)}}
                ></Box>
                <Title>비밀번호</Title>
                <Box
                    type="password"
                    id="password"
                    title="password"
                    maxlength="20"
                    class="int"
                    placeholder="비밀번호"
                    onChange={(e)=>{console.log("비밀번호",e.target.value)}}
                ></Box>
                <Title>비밀번호확인</Title>
                <Box
                    type="password"
                    id="passwordConfirm"
                    title="passwordConfirm"
                    maxlength="20"
                    class="int"
                    placeholder="비밀번호확인"
                    onChange={(e)=>{console.log("비밀번호확인",e.target.value)}}
                ></Box>
                <div className="alert-box">errorMessage</div>
                <Title>닉네임</Title>
                <Box
                    type="text"
                    id="text"
                    title="nickname"
                    maxlength="30"
                    class="int"
                    placeholder="닉네임"
                    onChange={(e)=>{console.log(e.target.value)}}
                ></Box>
                <Link to="/signup">
                <JoinBtn onClick={handleSignup}>회원가입</JoinBtn>
                </Link>
            </RowGroup>}
            </ModalView> 
            </ModalBackdrop>
        :null }
      </ModalContainer>
    </>
  );
};