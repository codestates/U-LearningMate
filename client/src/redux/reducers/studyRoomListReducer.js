import { initialState } from './initialState';
import { SHOW_ROOM_LIST } from '../actions/actions';

const studyRoomListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ROOM_LIST:
      return Object.assign({}, state, {
        room: [...state.room, action.payload],
      });
    default:
      return state;
  }
};

export default studyRoomListReducer;
