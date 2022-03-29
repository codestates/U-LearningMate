import { Link } from 'react-router-dom';
import styled from 'styled-components';

import landing2 from './LandingImages/Landing-Part2.png';

const BackgroundWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  text-align: center;
  background-color: #faf2f2;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;

  /* overflow: hidden; 스크롤 안보이기 */

  .background-img img {
    width: 700px;
    height: 500px;

    @media screen and (max-width: 700px) {
      display: none;
    }
  }
  .background-text {
  }
`;

const LandingPart2 = () => {
  return (
    <BackgroundWrap>
      <div className="background-img">
        <img src={landing2} />
      </div>
      <div className="background-text">
        <h1>페이지 설명 페이지 설명 페이지 설명 페이지 설명 페이지 설명</h1>
      </div>
    </BackgroundWrap>
  );
};

export default LandingPart2;
