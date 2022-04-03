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
  padding-top: 20%;
  border: 1px solid black;

  color: white;
  font-size: 20px;

  @media screen and (max-width: 500px) {
    padding-top: 10%;
  }

  .start-btn-section {
    display: flex;
    background-color: red;
    width: 300px;
    justify-content: center;
    border-radius: 100px;
    cursor: pointer;
  }
`;

const LandingPart1 = () => {
  return (
    <BackgroundWrap>
      <LandingTextWrap>
        <h1>유튜브와 함께</h1>
        <h1>강의를 시작해보세요</h1>
        <div className="start-btn-section">
          <Link to="/Main">
            <h1>시작</h1>
          </Link>
        </div>
      </LandingTextWrap>
    </BackgroundWrap>
  );
};

export default LandingPart1;
