import React from "react";
import styled, { createGlobalStyle } from "styled-components";


const Section = styled.section`
  position: relative;
  /* background: red; */
  /* min-height: 100%; */
`;

const Inner = styled.div`
  max-width: 980px;
  margin: 0 auto;
  position: relative;
  box-sizing: border-box;
  /* background: blue; */
`;

const Box = styled.input`
  display: block;
  position: relative;
  width: 30%;
  height: 51px;
  border: solid 1px #dadada;
  padding: 10px 110px 10px 14px;
  box-sizing: border-box;
  /* margin-right: 20px; */
  &:disabled {
    background: #ffffff;
  }
  & + & {
    margin-left: 20px;
  }
`;

const Subject = styled.div`
  text-align: center;
  color: #767676;
  max-width: 220px;
  margin: 0 auto;
  margin-top: 30px;
  font-size: 32px;
`;
const ContentsBlock = styled.div`
  width: 700px;
  height: 768px;

  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위한 설정 */
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

  margin-top: 30px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

const RowGroup = styled.div`
  font-family: Dotum, "돋움", Helvetica, sans-serif;
  font-size: 12px;
  /* min-width: 600px; */
  /* max-width: 100%;
  margin: 0 auto; */
  width: 100%;
`;

const ContentBox = styled.div`
  position: relative;
  width: 100%;
  height: 51px;
  border: solid 1px #dadada;
  padding: 10px 110px 10px 14px;
  box-sizing: border-box;
  /* margin-right: 20px; */
  &:disabled {
    background: #ffffff;
  }
  /* & + & {
    margin-left: 20px;
  } */
`;

function ContentsNote(props) {
  return (
    <Section>
      <Inner>
        <Box type="date" name="startday"></Box>
        <ContentsBlock>
          <RowGroup>
            <ContentBox>글1</ContentBox>
            <ContentBox>글1</ContentBox>
            <ContentBox>글1</ContentBox>
            <ContentBox>글1</ContentBox>
          </RowGroup>
        </ContentsBlock>
      </Inner>
    </Section>
  );
}

export default ContentsNote;