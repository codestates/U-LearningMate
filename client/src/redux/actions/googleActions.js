import { GOOGLE_START } from "../types";
import { LOGIN_START } from "../types";
import axios from 'axios';


export const googleStart = (tokenId) => async (dispatch)=> {
    const id_token = tokenId;
    console.log("idToken",id_token)
    let d = await axios
      .post(`${process.env.REACT_APP_API_URL}/auth/auth`, { id_token },{ withCredentials: true })
      .then((res) => {
        console.log("res1",res)
        if (res.data.message !== "ok") {
          return false;
        } else {
            localStorage.setItem("accessToken", res.data.data.accessToken);
            dispatch({type:LOGIN_START,payload:res.data.data.userInfo});
            return true
    }
  })};
