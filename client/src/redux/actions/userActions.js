import { LOGIN_START } from "../types";
import axios from 'axios';


export const loginStart = (email,password) => async (dispatch)=> {
    console.log("userAction으로 넘어온이메일패스워드",email,password)
    const a = {email,password}
    const b = await axios
    .post("http://ec2-13-125-238-251.ap-northeast-2.compute.amazonaws.com:8080/user/signin", {email,password})
    .then((res) => {
        console.log("res1",res)
        if (res.data.message !== "ok") {
          return false;
        } else {
            localStorage.setItem("accessToken", res.data.data.accessToken);
            dispatch({type:LOGIN_START,payload:res.data.data.userInfo});
            return true;
        }
    }
    )
};
