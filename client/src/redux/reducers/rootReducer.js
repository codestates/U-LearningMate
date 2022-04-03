import { combineReducers } from 'redux';
import createRoomReducer from './createRoomReducer';
import studyRoomListReducer from './studyRoomListReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
  createRoomReducer,
  studyRoomListReducer,
  loginReducer
});

export default rootReducer;
