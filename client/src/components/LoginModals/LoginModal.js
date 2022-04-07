import { useState, useRef,useEffect } from 'react';
import { Link, Redirect } from "react-router-dom";
import styled from 'styled-components';
import axios from "axios";
import ReactDOM from 'react-dom';
import loginicon from '../../icons/Login-icon.png';
import {ModalContainer,ModalBtn,ModalBackdrop,ModalView} from './Loginstyled.js';
import { useDispatch, useSelector } from "react-redux";
import  {loginStart}  from '../../redux/actions/userActions';
import GoogleLogin from 'react-google-login';
import { useGoogleLogin } from 'react-google-login';
import { googleStart } from '../../redux/actions/googleActions';
// import './Login.css'
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


const LoginModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignup,setIsSignup] = useState(true);
  const [isLogin,setIsLogin] = useState(false);
  const [errorMessage, setErrorMessage] = useState("좋은출발");
  let indexInfo = useSelector(state=>state.loginReducer.payload);
  console.log("로그인모달에서 로그인리듀서가처리한 스테이트값",indexInfo);
  const dispatch = useDispatch();

  const messagehandler = (message)=>{
    console.log("message",message);
    setErrorMessage(message);
  };
  const outSection = useRef();
  // const handleLogin = () => {setIsLogin(!isLogin);setIsOpen(!isOpen);};
  // const handleSignup = () => {setIsSignup(!isSignup)};
  const openModalHandler = () => {
    // TODO : isOpen의 상태를 변경하는 메소드를 구현합니다.
    // if(indexInfo.IsLoginBoolean === true){
    //   setIsOpen(false)
    // }
    setIsOpen(!isOpen)
  };
  const [state, setState] = useState({
    email: "",
    password: "",
    name:"",
  });
  const [tokenId,setTokenId] = useState("");
  const { email, password,name } = state;

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
    // console.log(name,value)

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setState({ email: "", password: "" });
    
    dispatch(loginStart(email,password));
    console.log("로그인스타트함수만 써도 안에 디스패치 있어서될것 같은데",loginStart(email,password))
    // console.log("$$$$$$$$$$$작동하나?",indexInfo.IsLoginBoolean)
    // setTimeout(function(){if(indexInfo.IsLoginBoolean === true){
    //   setIsLogin(true)
    //   setIsOpen(false)
    // }},1000)
    console.log("$$$$$$$$$$$$",setIsLogin);
    // setIsOpen(!isOpen)
    // if(indexInfo.IsLoginBoolean === "true"){
    //   console.log("$$$$$$$$$$$작동하나?")
    //   setIsLogin(true)
    //   setIsOpen(true)
    // }else{console.log("$$$$$$$$$$$작동안하는듯");setIsLogin(false)}
  };
  // useEffect(() =>{},[isOpen])
  // };
  const { signIn, loaded } = useGoogleLogin({
  });

const responseGoogle = (response) => {
  setIsOpen(!isOpen);
  setState({...state,...response.profileObj});
  setTokenId(response.tokenId);
  console.log("response",response.tokenId);
  dispatch(googleStart(response.tokenId));
}

  return (
    <>
    {indexInfo === undefined ?<ModalBtn 
    // TODO : 클릭하면 Modal이 열린 상태(isOpen)를 boolean 타입으로 변경하는 메소드가 실행되어야 합니다. 
    onClick={()=>{openModalHandler()}}
    >
      {indexInfo === undefined ?<img src={loginicon} width="70%" align="top" alt="로그인" />:`${indexInfo.nickname}님`}
    </ModalBtn>:`${indexInfo.nickname}님`}
    <ModalContainer>
    { isOpen === true ? 
      <ModalBackdrop 
            ref={outSection}
            onClick={e=>{if(outSection.current === e.target){openModalHandler()}}} > 
            <ModalView onClick={(e) => e.stopPropagation()}>
            <div>
      <div id="logreg-forms">
        <form className="form-signin" onSubmit={handleSubmit}>
          <h1
            className="h3 mb-3 font-weight-normal"
            style={{ textAlign: "center" }}
          >
            {" "}
            Sign in
          </h1>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            value={email}
            name="email"
            onChange={handleChange}
            required
            />
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            value={password}
            name="password"
            onChange={handleChange}
            required
          />
          <button className="btn btn-secondary btn-block" type="submit">
            <i className="fas fa-sign-in-alt"></i> Sign in
          </button>
          <hr />
          <div className="alert-box">{errorMessage}</div>

              {/* <LoginBtn onClick={handleLogin}>LOGIN</LoginBtn> */}
              {/* <JoinBtn onClick={handleSignup}>회원가입</JoinBtn> */}
              <GoogleLogin
              clientId="133857767007-bbfmnq7mf9t27c3ugkm10ukf0l5cgqdb.apps.googleusercontent.com"
              buttonText="구글로 LOGIN 시작하기"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
              />
          {/* <div className="social-login">
            <button
              className="btn google-btn social-btn"
              type="button"
              onClick={()=>{}}
            >
              <span>
                <i className="fab fa-google-plus-g"></i> Sign in with Google+
              </span>{" "}
            </button>
          </div> */}
          <hr />
          <p>Don't have an account!</p>
          <Link to="/register">
            <button
              className="btn btn-primary btn-block"
              type="button"
              id="btn-signup"
              onClick={()=>setIsOpen(!isOpen)}
            >
              <i className="fas fa-user-plus"></i> Sign up New Account
            </button>
          </Link>
        </form>
        <br />
      </div>
    </div>
            </ModalView> 
            </ModalBackdrop>
        :null }
      </ModalContainer>
    </>
  );
};

export default LoginModal;