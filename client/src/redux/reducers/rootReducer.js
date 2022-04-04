import { combineReducers } from 'redux';
import createRoomReducer from './createRoomReducer';
import studyRoomListReducer from './studyRoomListReducer';
import loginReducer from './loginReducer';
import  signupReducer from './signupReducer';
import googleStartReducer from './googleStartReducer';

const rootReducer = combineReducers({
  createRoomReducer,
  studyRoomListReducer,
  loginReducer,
  signupReducer,
  googleStartReducer,
});

export default rootReducer;
