import styled from 'styled-components';
import { useState, useEffect } from 'react';

import all from '../../icons/All-icon.png';
import economy from '../../icons/Economy-icon.png';
import english from '../../icons/English-icon.png';
import history from '../../icons/History-icon.png';
import it from '../../icons/IT-icon.png';
import science from '../../icons/Science-icon.png';
import exercise from '../../icons/Exercise-icon.png';
import cooking from '../../icons/Cooking-icon.png';
import art from '../../icons/Art-icon.png';
import etc from '../../icons/Etc-icon.png';

const TagContainer = styled.div`
  max-width: 1200px;
  border: 2px;
  margin: 120px auto 20px;

  .tag-container-box {
    width: 100%;
  }
  .tag-section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
    list-style: none;
    padding-left: 0%;
  }
  .tag-box {
    text-align: center;
    :hover {
      background-color: #faf2f2;
      border-radius: 50px;
    }
  }
  .tag-Image {
    width: 85px;
    opacity: 1;
  }
  .tag-name {
    text-align: center;
    color: #656873;
  }

  @media screen and (max-width: 750px) {
    margin: 40px auto 20px;

    .tag-Image {
      width: 50px;
    }
    .tag-name {
      font-size: 13px;
    }
  }
`;

const ListContainer = styled.div`
  max-width: 1200px;
  border: 2px solid black;
  margin: 100px auto 20px;

  .list-container-box {
    width: 100%;
  }

  .list-section {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding-left: 0%;
  }

  .list-box {
    margin: auto;
    margin-top: 2%;
    width: 386px;
    height: 300px;
    text-align: center;
    border: 1px solid black;
    border-radius: 50px;
    :hover {
      background-color: #faf2f2;
      border-radius: 50px;
    }
  }
`;

const StudyRoomList = () => {
  const tagData = [
    '전체',
    '외국어',
    '역사',
    'IT',
    '경제',
    '과학',
    '운동',
    '요리',
    '문화/예술',
    '기타',
  ];
  const tagImageData = [
    all,
    english,
    history,
    it,
    economy,
    science,
    exercise,
    cooking,
    art,
    etc,
  ];

  return (
    <>
      <TagContainer>
        <div className="tag-container-box">
          <ul className="tag-section">
            {tagData.map((tag, idx) => {
              return (
                <li
                  className="tag-box"
                  data-value={tag}
                  key={idx}
                  data-key={idx}
                >
                  <img
                    className="tag-Image"
                    src={tagImageData[idx]}
                    data-value={tag}
                    data-key={idx}
                  />
                  <div className="tag-name" data-value={tag} data-key={idx}>
                    {tag}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </TagContainer>
      <ListContainer>
        <div className="list-container-box">
          <ul className="list-section">
            {tagData.map((tag, idx) => {
              return (
                <li
                  className="list-box"
                  data-value={tag}
                  key={idx}
                  data-key={idx}
                >
                  <a href="/studyroom/1">
                    <img
                      className="list-Image"
                      src={tagImageData[idx]}
                      data-value={tag}
                      data-key={idx}
                    />
                  </a>
                  <div className="list-name" data-value={tag} data-key={idx}>
                    {tag}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </ListContainer>
    </>
  );
};
export default StudyRoomList;
