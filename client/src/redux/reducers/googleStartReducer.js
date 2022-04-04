import { 로그인State } from './initialState';
import {GOOGLE_START} from '../types';

const googleStartReducer = (state = 로그인State, action) => {
  const {type ,payload} = action;
  console.log("action",action)
  switch (type) {
    case GOOGLE_START:
    //   payload.IsLoginBoolean = true
      console.log("googleloginReducer.js에서payload",payload)
      return {...state.user,payload}
    default:
      return state;
  }
};

export default googleStartReducer;
