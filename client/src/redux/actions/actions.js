export const SET_LOGIN = 'SET_LOGIN';
export const SET_LOGOUT = 'SET_LOGOUT';
export const CREATE_ROOM = 'CREATE_ROOM';
export const SHOW_ROOM_LIST = 'SHOW_ROOM_LIST';

export const setLogin = () => ({ type: SET_LOGIN });

export const setLogout = () => ({ type: SET_LOGOUT });

export const createRoom = (payload) => {
  return {
    type: CREATE_ROOM,
    payload,
  };
};

export const showRoomList = (payload) => {
  return {
    type: SHOW_ROOM_LIST,
    payload,
  };
};
