import { Link } from 'react-router-dom';
import styled from 'styled-components';

import landing3 from './LandingImages/Landing-Part3.png';

const BackgroundWrap = styled.div`
  width: 100%;
  height: 100vh;
  text-align: end;

  /* overflow: hidden; 스크롤 안보이기 */
  .background-img img {
    margin: 20px;
    width: 350px;
    height: 650px;
  }

  @media screen and (max-width: 900px) {
    text-align: center;
    .background-img img {
      width: 350px;
      height: 650px;
    }
  }
`;

const LandingPart3 = () => {
  return (
    <BackgroundWrap>
      <div className="background-img">
        <img src={landing3} />
        <img src={landing3} />
      </div>
      <div className="background-text"></div>
    </BackgroundWrap>
  );
};

export default LandingPart3;
