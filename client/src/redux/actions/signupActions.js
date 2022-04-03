import { SIGNUP_START } from "../types";
import axios from 'axios';


export const signupStart = (email,nickname,password,mobile,level,team) => async (dispatch)=> {
    console.log("userAction으로 넘어온이메일패스워드",email,nickname,password,mobile,level,team)
    const signInfo = {email,password,nickname,mobile,level,team} 
    const b = await axios
    .post(`${process.env.REACT_APP_API_URL}/users/signup`, signInfo,{
        withCredentials: true,
      })
    .then((res) => {
        console.log("res1",res)
        if (res.data.message !== "ok") {
          return false;
        } else {
                dispatch({type:SIGNUP_START,payload:{signInfo}});
                return true
            }
        })};