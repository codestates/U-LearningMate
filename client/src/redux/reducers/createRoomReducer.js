import { initialRoom } from './initialState';
import { CREATE_ROOM } from '../actions/actions';

const createRoomReducer = (state = initialRoom, action) => {
  switch (action.type) {
    case CREATE_ROOM:
      return Object.assign({}, state, {
        room: [...state.room, action.payload],
      });
    default:
      return state;
  }
};

export default createRoomReducer;
