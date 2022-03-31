import styled from 'styled-components';
import { Link } from 'react-router-dom';
import login from '../icons/Login-icon.png';
import person from '../icons/Person-icon.png';
import write from '../icons/Write-icon.png';
import loginicon from '../icons/Login-icon.png';
import logo2 from '../icons/logo_transparent (1).png';
import  {LoginModal}  from './LoginModals/LoginModal';

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
  overflow:hidden;
  > div a img {
    padding: 10px 10px;
    width: 45px;

    :hover {
      background-color: #faf2f2;
      border-radius: 10px;
      margin-bottom: 4px;padding: 4px;
      margin-right: 4px;padding: 4px;
      box-shadow: 4px 4px 4px crimson;
    }
  }

  @media screen and (max-width: 750px) {
    > div a img {
      display: none;
    }
  }
`;
const LoginModal1 = styled.div`
padding: 0 10px 0 10px;
/* margin-bottom: 20px; */
  @media screen and (max-width: 750px) {
      display: none;
  };
  :hover {
      background-color: #faf2f2;
      border-radius: 10px;
      margin-bottom: 4px;padding: 4px;
      margin-right: 4px;padding: 4px;
      box-shadow: 4px 4px 4px crimson;
    }
`;

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <div className="logo">
          <a href="/">
            <img className="logo-image" src={logo2} />
          </a>
        </div>
        <MenuContainer>
          <div className="write-icon">
            <a href="/createstudyroom">
              <img className="write-image" src={write} />
            </a>
          </div>
          <div className="person-icon">
            <a href="/mypage/myinfo">
              <img src={person} />
            </a>
          </div>
          <LoginModal1>
            <LoginModal/>
          </LoginModal1>
        </MenuContainer>
      </HeaderContainer>
    </>
  );
};

export default Header;
