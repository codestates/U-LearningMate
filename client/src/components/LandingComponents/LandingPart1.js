import { Link } from 'react-router-dom';
import styled from 'styled-components';

import landing1 from './LandingImages/Landing-Part1.jpg';

const BackgroundWrap = styled.div`
  background-image: url('https://media.vlpt.us/images/acacpp/post/4a5c0c9e-7e61-44fe-bcba-06ff492150cd/Landing-Part1.jpg');
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  height: 100vh;
  width: 100%;

  /* .background-img img {
    width: 100%;
    height: 100vh;
  }
  .background-text {
    position: absolute;

    font-size: 50px;
  } */
  @media screen and (max-width: 750px) {
    background-position: 45% center;
  }
`;

const LandingTextWrap = styled.div`
  max-width: 1200px;
  margin-left: 5%;
  /* border: 2px solid black; */
`;
const JoinBtn = styled.button`
  display: block;
  /* background: #ffffff; */
  top: 55%;
  right: 40%;
  border: 3px solid indianred;
  border-radius: 10px;
  width: 15%;
  height: 55px;
  margin: 19px 0 8px;
  font-weight: bold;
  /* font-size: 100; */
  background-color: transparent;
  &:hover {
    background: #faf2f2;
    /* text-decoration: underline; */
      margin-bottom: 4px;padding: 4px;
      margin-right: 4px;padding: 4px;
      box-shadow: 4px 4px 4px red;
  }
`;
const LandingPart1 = () => {
  return (
    <BackgroundWrap>
      <LandingTextWrap>
        <Link to="/main">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <JoinBtn>시 작 하 기</JoinBtn>
        </Link>
      </LandingTextWrap>
    </BackgroundWrap>
  );
};

export default LandingPart1;
