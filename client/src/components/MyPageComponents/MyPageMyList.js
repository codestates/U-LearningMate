import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Link, Redirect } from "react-router-dom";
import { Tab } from './Tab';


const ListContainer = styled.div`
  max-width: 700px;
  margin: 100px auto 100px;
  text-align: center;
  border: 1px solid;
  box-shadow: 3px 3px 3px 3px gray;
`;
const Title = styled.h3`
  margin: 19px 0 8px;
  font-size: 14px;
  font-weight: 700;
  text-align:left;
`;
const Title2 = styled.h3`
  display: inline-block;
  margin: 19px 0 8px;
  font-size: 20px;
  font-weight: 700;
  text-align:left;
`;
const MylistComponent = () => {

  return (
    <>
      <ListContainer>
        <Link to="/mypage/myinfo">
          <Title2>회원정보수정</Title2>
        </Link>
        <Link to="/mypage/mylist">
          <Title2>/작성,신청내역 관리</Title2>
        </Link>
        <br/>
        <Tab/>
      </ListContainer>
    </>
  );
};
export default MylistComponent;
