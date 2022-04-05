import { initialList } from './initialState';
import { SHOW_ROOM_LIST } from '../actions/actions';

const studyRoomListReducer = (state = initialList, action) => {
  switch (action.type) {
    case SHOW_ROOM_LIST:
      //   return Object.assign({}, state, {
      //     room: [...state.room, action.payload],
      //   });
      // default:
      //   return state;
      let data = action.payload;
      return [...state, ...data];

    default:
      return state;
  }
};

export default studyRoomListReducer;
