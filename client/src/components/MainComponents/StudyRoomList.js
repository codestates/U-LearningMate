import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
// import Rooms from './Room';

import all from '../../icons/All-icon.png';
import economy from '../../icons/Economy-icon.png';
import english from '../../icons/English-icon.png';
import historyicon from '../../icons/History-icon.png';
import it from '../../icons/IT-icon.png';
import science from '../../icons/Science-icon.png';
import exercise from '../../icons/Exercise-icon.png';
import cooking from '../../icons/Cooking-icon.png';
import art from '../../icons/Art-icon.png';
import etc from '../../icons/Etc-icon.png';

import { useDispatch, useSelector } from 'react-redux';
import { showRoomList } from '../../redux/actions/actions';
import rootReducer from '../../redux/reducers/rootReducer';
import StudyRoomDetail from '../StudyRoomComponents/StudyRoomDetail';

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
    cursor: pointer;

    :hover {
      background-color: #faf2f2;
      border-radius: 50px;
      transform: translateY(-3px);
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
  margin: 100px auto 20px;

  @media screen and (max-width: 450px) {
    margin-top: 40px;
  }

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
    min-width: 386px;
    min-height: 300px;
    text-align: center;
    border: 1px solid #9d9898;
    border-radius: 50px;
    box-shadow: 2px 2px 2px 2px gray;

    :hover {
      background-color: #faf2f2;
      border-radius: 50px;
      transform: translateY(-3px);
    }

    @media screen and (max-width: 450px) {
      width: 70%;
      height: 225px;
    }
  }
`;

const StudyRoomList = ({ handleFilterCategory }) => {
  const list = useSelector((state) => state.studyRoomListReducer);

  const history = useHistory();

  const dispatch = useDispatch();

  const roomList = () => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/matches/ullist`
      )
      .then((res) => {
        console.log(res.data);
        dispatch({ type: 'SHOW_ROOM_LIST', payload: res.data });
      })
      .catch((err) => console.log(err));
  };
  useEffect(roomList, []);

  console.log(list);

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
    historyicon,
    it,
    economy,
    science,
    exercise,
    cooking,
    art,
    etc,
  ];

  let [selectCategory, setSelectCategory] = useState('');
  const getDataKey = (event) => {
    let num = event.target.getAttribute('data-key');
    if (num !== selectCategory) {
      handleFilterCategory(event);
    }
    setSelectCategory(num);
  };

  return (
    <>
      <TagContainer category={selectCategory}>
        <div className="tag-container-box">
          <ul className="tag-section">
            {tagData.map((tag, idx) => {
              return (
                <li
                  className="tag-box"
                  data-value={tag}
                  key={idx}
                  data-key={idx}
                  onClick={getDataKey}
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
            {/* {tagData.map((tag, idx) => {
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
            })} */}
            {list.map((room, idx) => {
              return (
                <li
                  className="list-box"
                  key={idx}
                  status={room.is_full}
                  onClick={() => {
                    history.push(
                      room.is_full === 0
                        ? `/studyroom/${room.id}`
                        : alert('마감되었습니다.')
                    );
                  }}
                >
                  {room.channel}
                  <div>{room.Tag_name}</div>
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
