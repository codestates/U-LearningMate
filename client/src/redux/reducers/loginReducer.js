import { 로그인State } from './initialState';
import {LOGIN_START} from '../types';

const loginReducer = (state = 로그인State, action) => {
  const {type ,payload} = action;
  console.log("action",action)
  switch (type) {
    case LOGIN_START:
      payload.IsLoginBoolean = true
      console.log("loginReducer.js에서payload",payload)
      return {...state.user,payload}
    default:
      return state;
  }
};

export default loginReducer;
