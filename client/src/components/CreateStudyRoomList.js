import styled from 'styled-components';
import { useState, useEffect } from 'react';
import youtube from '../icons/Youtube-icon.png';

const ListContainer = styled.div`
  max-width: 700px;
  margin: 100px auto 100px;
  text-align: center;
  border: 1px solid;
  box-shadow: 3px 3px 3px 3px gray;

  @media screen and (max-width: 450px) {
    margin: 40px auto 20px;
  }
  @media screen and (max-width: 850px) {
    border: 0;
    box-shadow: none;
  }

  .image-section {
    margin: 30px;
  }

  .tag-section {
    margin: 20px;
    color: #989a9c;

    .tag-select-option select {
      width: 50%;
      height: 50px;
      text-align-last: center;
      text-align: center;
      font-size: 1em;
      background-color: #fff;
      border: 1px solid #dcdfd5;
      border-radius: 1em;
      appearance: none;
      outline: none;
    }
  }

  .input-section {
    > div input {
      margin: 10px;
      width: 50%;
      height: 50px;
      border-top: none;
      border-right: none;
      border-left: none;
    }
  }

  .date-section {
    font-size: 14px;
    .start-text {
      margin-top: 15px;
    }
    > input {
      width: 40%;
      margin: 15px;
      border-top: none;
      border-right: none;
      border-left: none;
      @media screen and (max-width: 490px) {
        width: 60%;
      }
    }
  }

  .radio-box-section {
    margin: 30px 20px 20px 20px;
  }

  .question-section {
    margin: 20px;

    > textarea {
      word-wrap: break-word;
      word-break: break-word;
      white-space: pre-wrap;
      font-size: 15px;
      width: 50%;
      height: 50px;
    }
  }

  .apply-button-section {
    margin: 70px 30px;

    @media screen and (max-width: 450px) {
      margin: 40px auto;
    }

    > a button {
      width: 50%;
      height: 50px;
      border-radius: 2em;
      background-color: #faf2f2;
      border: 1px solid #fa9898;
    }
  }
`;

const CreateStudyRoomList = () => {
  const initialValue = {
    tag: '',
    title: '',
    channel: '',
    link: '',
    startDate: '',
    endDate: '',
    content: '',
  };

  const [studyRoomInfo, setStudyRoomInfo] = useState(initialValue);

  const inputValueHandler = (e, name) => {
    const inputValue = e.target.value;
    if (name === 'tag') {
      const newInputValue = { ...studyRoomInfo, tag: inputValue };
      setStudyRoomInfo(newInputValue);
    } else if (name === 'title') {
      const newInputValue = { ...studyRoomInfo, title: inputValue };
      setStudyRoomInfo(newInputValue);
    } else if (name === 'channel') {
      const newInputValue = { ...studyRoomInfo, channel: inputValue };
      setStudyRoomInfo(newInputValue);
    } else if (name === 'link') {
      const newInputValue = { ...studyRoomInfo, link: inputValue };
      setStudyRoomInfo(newInputValue);
    } else if (name === 'start-date') {
      const newInputValue = { ...studyRoomInfo, startDate: inputValue };
      setStudyRoomInfo(newInputValue);
    } else if (name === 'end-date') {
      const newInputValue = { ...studyRoomInfo, endDate: inputValue };
      setStudyRoomInfo(newInputValue);
    } else if (name === 'content') {
      const newInputValue = { ...studyRoomInfo, content: inputValue };
      setStudyRoomInfo(newInputValue);
    }
  };

  // const handleDate = (date) => {
  //   setStartDate(date);
  //   console.log(date);
  //   const newInputValue = { ...studyRoomInfo, startDate: startDate };
  //   setStudyRoomInfo(newInputValue);
  // };

  useEffect(() => {
    console.log(studyRoomInfo);
  }, [studyRoomInfo]);

  const tagList = [
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

  return (
    <>
      <ListContainer>
        <div className="image-section">
          <img src={youtube} />
        </div>
        <div className="tag-section">
          <div className="tag-section-input">
            <div>스터디룸의 태그를 선택해주세요</div>
            <br />
          </div>
          <div className="tag-select-option">
            <select
              name="tag"
              onChange={(e) => inputValueHandler(e, 'tag')}
              required
            >
              <option value="">태그</option>
              {tagList.map((el, idx) => (
                <option key={idx} value={el}>
                  {el}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="input-section">
          <div>
            <input
              name="title"
              type="text"
              placeholder="스터디룸 이름을 입력하세요"
              onChange={(e) => inputValueHandler(e, 'title')}
            />
          </div>
          <div>
            <input
              name="channel"
              type="text"
              placeholder="유튜브 채널 이름을 입력하세요"
              onChange={(e) => inputValueHandler(e, 'channel')}
            />
          </div>
          <div>
            <input
              name="link"
              type="text"
              placeholder="유튜브 링크를 입력하세요"
              onChange={(e) => inputValueHandler(e, 'link')}
            />
          </div>
        </div>
        <div className="date-section">
          <div className="start-text">스터디 시작일</div>
          <input
            name="start-date"
            type="datetime-local"
            onChange={(e) => inputValueHandler(e, 'start-date')}
          />
          <div>스터디 마감일</div>
          <input
            name="end-date"
            type="datetime-local"
            onChange={(e) => inputValueHandler(e, 'end-date')}
          />
        </div>
        <div className="radio-box-section">
          <input id="first-come" type="radio" name="radio-answer" />
          <label id="first-come">선착순</label>
          <input id="answer" type="radio" name="radio-answer" />
          <label id="answer">답변 선택</label>
        </div>
        <div className="question-section">
          <div>스터디 메이트를 위한 질문을 작성해주세요</div>
          <br />
          <textarea
            name="content"
            onChange={(e) => inputValueHandler(e, 'content')}
          />
        </div>
        <div className="apply-button-section">
          <a href="/Main">
            <button>작성완료</button>
          </a>
        </div>
      </ListContainer>
    </>
  );
};
export default CreateStudyRoomList;
