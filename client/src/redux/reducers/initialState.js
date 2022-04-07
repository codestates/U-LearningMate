// export const initialStateLogin = false;

export const initialList = [];

export const initialRoom = {
  room: {
    tag: null,
    title: null,
    channel: null,
    link: null,
    start_date: null,
    end_date: null,
    question: null,
    FCFS: null,
    user_id: null,
    number_of_lectures: null,
    number_of_persons: 2,
  },
};
export let 로그인State = {
 user:{ 
  email:"",
  password:"",
  nickname:"",
  IsLoginBoolean:"",
  id:"",
  accessToken:"",
  id_Token:""
 }
}
export let 회원가입State = {
  signInfo:{ 
   email:"",
   password:"",
   nickname:"",
   IsLoginBoolean:"",
   id:"",
   accessToken:"",
   id_Token:""
  }
 }
