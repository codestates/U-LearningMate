import { useState, useRef,useEffect } from 'react';
import { Link, Redirect } from "react-router-dom";
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from "react-redux";
import  {signupStart}  from '../../redux/actions/signupActions';
// import './Login.css'
const Container = styled.div`
  max-width: 700px;
  margin: 100px auto 100px;
  text-align: center;
  border: 1px solid black;
`

const RegisterComponent = () => {
  let signupInfo = useSelector(state=>state.signupReducer);
  console.log("RegisterComponent.js의 로그인모달에서 로그인리듀서가처리한 스테이트값",signupInfo);
  const dispatch = useDispatch();


  const [state, setState] = useState({
    email: "",
    nickname:"",
    password: "",
    passwordConfirm: "",
  });

  const { email,nickname, password,passwordConfirm} = state;

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
    // console.log(name,value)
    // console.log(state)

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setState({ email: "", password: "" });
    
    dispatch(signupStart(email,nickname,password));
    // console.log("이것만 써도 될것같은데 왜 디스패치쓰지?",signupStart(email,nickname,password))
  };

  return (
    <Container>
            <div>
      <div id="logreg-forms">
        <form className="form-signin" onSubmit={handleSubmit}>
          <h1
            className="h3 mb-3 font-weight-normal"
            style={{ textAlign: "center" }}
          >
            {" "}
            Sign up
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
            type="nickname"
            id="inputNickname"
            className="form-control"
            placeholder="Nickname"
            value={nickname}
            name="nickname"
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
          <input
            type="password"
            id="inputPasswordConfirm"
            className="form-control"
            placeholder="PasswordConfirm"
            value={passwordConfirm}
            name="passwordConfirm"
            onChange={handleChange}
            required
          />
          <button className="btn btn-secondary btn-block" type="submit">
            <i className="fas fa-sign-in-alt">Sign up</i>
          </button>
        </form>
        <br />
      </div>
    </div>
    </Container>
  );
};

export default RegisterComponent;
