import { SIGNUP_START } from "../types";
import axios from 'axios';


export const signupStart = (email,nickname,password) => async (dispatch)=> {
    console.log("userAction으로 넘어온이메일패스워드",email,nickname,password)
    const signInfo = {email,password,nickname} 
    const b = await axios
    .post("http://ec2-13-125-238-251.ap-northeast-2.compute.amazonaws.com:8080/user/signup", signInfo,{
        withCredentials: true,
      })
    .then((res) => {
        console.log("res1",res)
        if (res.data.message !== "ok") {
          alert("회원가입실패");
          document.location.href = '/register';
          return false;
        } else {
                document.location.href = '/';
                dispatch({type:SIGNUP_START,payload:{signInfo}});
                alert("회원가입완료");
                return true
            }
        })};
