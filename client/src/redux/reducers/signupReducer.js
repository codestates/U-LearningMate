import { 회원가입State } from './initialState';
import {SIGNUP_START} from '../types';

const signupReducer = (state = 회원가입State, action) => {
  const {type ,payload} = action;
  console.log("action",action)
  switch (type) {
    case SIGNUP_START:
      console.log("signupReducer.js에서",payload)
      return {...state.user,payload}
    default:
      return state;
  }
};

export default signupReducer;
