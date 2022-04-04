import styled from 'styled-components';
import { Link } from 'react-router-dom';

import person from '../icons/Person-icon.png';
import write from '../icons/Write-icon.png';
import login from '../icons/Login-icon.png';
import logo2 from '../icons/logo_transparent (1).png';
import LoginModal from './LoginModals/LoginModal';

const HeaderContainer = styled.div`
  position: sticky;
  margin: auto;
  top: 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  padding: 10px 10px;

  /* .logo {
    max-width: 1200px;
    margin: auto;
    border: 1px solid black;
  } */

  .logo-image {
    width: 180px;
    height: 35px;
  }

  @media screen and (max-width: 750px) {
    justify-content: center;
    .logo-image {
      margin-left: 0px;
    }
  }
`;

const MenuContainer = styled.div`
  display: flex;
  > div a img {
    padding: 10px 10px;
    width: 45px;

    :hover {
      background-color: #faf2f2;
      border-radius: 10px;
    }
  }

  @media screen and (max-width: 750px) {
    > div a img {
      display: none;
    }
  }
`;

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <div className="logo">
          <Link to="/main">
            <img className="logo-image" src={logo2} />
          </Link>
        </div>
        <MenuContainer>
          <div className="write-icon">
            <Link to="/createstudyroom">
              <img className="write-image" src={write} />
            </Link>
          </div>
          <div className="person-icon">
            <Link to="/mypage/myinfo">
              <img src={person} />
            </Link>
          </div>
          <div className="login-icon">
              <LoginModal/>
          </div>
        </MenuContainer>
      </HeaderContainer>
    </>
  );
};

export default Header;
