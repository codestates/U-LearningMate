import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

import landing1 from './LandingImages/Landing-Part1.jpg';

const textAnimation = keyframes` {

  0% {
    letter-spacing: -0.5em;
    -webkit-transform: translateZ(-800px);
            transform: translateZ(-800px);
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0);
            transform: translateZ(0);
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }
}
`;

const BackgroundWrap = styled.div`
  background-image: url('https://imagedelivery.net/v7-TZByhOiJbNM9RaUdzSA/086eae57-e93a-49f7-e0d9-b778fdb09500/public');
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
  padding-top: 20%;
  /* border: 1px solid black; */
  text-shadow: 0 0 3px black;
  color: white;
  font-size: 20px;

  > h1 {
    animation-name: ${textAnimation};
    animation-duration: 1s;
    animation-delay: 0;
    animation-iteration-count: 1;
    animation-timing-function: linear;
  }

  @media screen and (max-width: 500px) {
    padding-top: 20%;
    font-size: 15px;
    /* text-align: left; */
  }

  /* .start-btn-section {
    display: flex;
    background-color: red;
    width: 300px;
    justify-content: center;
    border-radius: 100px;
    cursor: pointer;
  } */
`;

const LandingPart1 = () => {
  return (
    <BackgroundWrap>
      <LandingTextWrap>
        <h1>유튜브와 함께</h1>
        <h1>강의를 시작해보세요</h1>
        <div className="start-btn-section">
          <Link to="/main">
            <h1>시작</h1>
          </Link>
        </div>
      </LandingTextWrap>
    </BackgroundWrap>
  );
};

export default LandingPart1;
