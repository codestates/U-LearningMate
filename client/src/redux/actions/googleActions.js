import { GOOGLE_START } from "../types";
import { LOGIN_START } from "../types";
import axios from 'axios';


export const googleStart = (tokenId) => async (dispatch)=> {
    const id_Token = tokenId;
    console.log("idToken",id_Token)
    let d = await axios
      .post(`${process.env.REACT_APP_API_URL}/user/oauth`, { id_Token })
      .then((res) => {
        console.log("res1",res)
        if (res.data.message !== "ok") {
          return false;
        } else {
            localStorage.setItem("accessToken", res.data.data.accessToken);
            const c = axios
            .post(`${process.env.REACT_APP_API_URL}/users/auth`,
              { accessToken: res.data.data.accessToken },
              { withCredentials: true }
            ).then((userinformation)=>{
                console.log("userinformation",userinformation);
                dispatch({type:LOGIN_START,payload:userinformation.data.data.userInfo});
                return true
            })
        }
    }
)};