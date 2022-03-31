import styled from 'styled-components';

const FooterContainer = styled.div`
  text-align: center;
  width: 100%;
  background-color: #f7f2f4;

  @media screen and (max-width: 780px) {
    display: none;
  }
`;

const FooterUl = styled.ul`
  padding-bottom: 10px;
`;

const FooterLi = styled.li`
  display: inline;
  padding-right: 20px;
  position: relative;
  white-space: nowrap;
  color: #222;

  &::after {
    content: '';
    position: absolute;
    right: 10px;
    top: 8px;
    width: 1px;
    height: 11px;
    background-color: #8f8f8f;
  }
  &:last-child::after {
    width: 0;
    height: 0;
  }
  &:hover a {
    color: #8f8f8f;
  }
`;

const FooterA = styled.a`
  color: #222;
`;

const FooterP = styled.p`
  display: inline-block;
  font-size: 15px;
  font-weight: bold;
  color: black;
`;

function Footer() {
  return (
    <footer>
      <FooterContainer>
        <FooterP>서비스명: U-Learning-Mate</FooterP>
        <FooterUl>
          <div>
            <FooterLi>
              <FooterA>개인정보</FooterA>
            </FooterLi>
            <FooterLi>
              <FooterA>처리방침</FooterA>
            </FooterLi>
            <FooterLi>
              <FooterA>이용약관</FooterA>
            </FooterLi>
            <FooterLi>
              <FooterA>저작권정책</FooterA>
            </FooterLi>
            <FooterLi>
              <FooterA>Q&A</FooterA>
            </FooterLi>
          </div>
        </FooterUl>
      </FooterContainer>
    </footer>
  );
}

export default Footer;
