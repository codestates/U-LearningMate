
import styled from 'styled-components';
export const ModalContainer = styled.div`
// TODO : Modal을 구현하는데 전체적으로 필요한 CSS를 구현합니다.
  display: flex;
  justify-content: center;
  height: 100%;
  margin:0;
  align-items: center;
  /* border: green solid */
`;

export const ModalBackdrop = styled.div`
 // TODO : Modal이 떴을 때의 배경을 깔아주는 CSS를 구현합니다.
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.4);
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    /* border: blue solid */
`;

export const ModalBtn = styled.button`
  text-decoration: none;
  /* position: absolute; */
  /* align-items: center; */
  /* box-sizing: border-box; */
  border: none;
  margin: 0;
  padding: 0;
  border-radius: 15px;
  cursor: grab;
  height:100%;
  width:100%;
  /* overflow:hidden; */
  line-height:10px;
  vertical-align:top;
  /* border: violet solid; */
  background-color: transparent;
  /* background-size: cover; */
`;

export const ModalView = styled.div.attrs(props => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
  role: 'dialog'
}))`
// TODO : Modal창 CSS를 구현합니다.
display: flex;
justify-content: center;
align-items: center;
background-color: white;
border: none;
border-radius: 10px;
color: black;
width: 1200px;
height: 600px; 
position: absolute;
left: 50%;
top:50%;
transform: translate(-50%, -50%);
z-index:100;
border: grey 1px solid;
box-shadow: 3px 3px 3px 3px gray;
`;
