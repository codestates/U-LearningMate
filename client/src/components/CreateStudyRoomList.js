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

    > img {
      @media screen and (max-width: 450px) {
        width: 25%;
      }
    }
  }

  .tag-section {
    margin: 20px;
    color: #989a9c;

    @media screen and (max-width: 450px) {
      font-size: 14px;
    }

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
      cursor: pointer;

      @media screen and (max-width: 450px) {
        font-size: 14px;
      }
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
      color: #83858a;
      width: 40%;
      margin: 15px;
      border-top: none;
      border-right: none;
      border-left: none;
      text-align: center;

      @media screen and (max-width: 490px) {
        width: 60%;
      }
    }
  }

  .lecture-section {
    margin: 20px;
    color: #83858a;

    @media screen and (max-width: 450px) {
      font-size: 14px;
    }

    > select {
      margin-top: 10px;
    }
  }

  .radio-box-section {
    margin: 15px 20px 20px 20px;

    @media screen and (max-width: 450px) {
      font-size: 14px;
    }
  }

  .question-section {
    margin: 20px;
    color: #83858a;

    @media screen and (max-width: 450px) {
      font-size: 14px;
    }

    > textarea {
      word-wrap: break-word;
      word-break: break-word;
      white-space: pre-wrap;
      font-size: 15px;
      width: 50%;
      height: 50px;
    }
  }

  .comment-section {
    margin: 20px;
    color: #83858a;

    @media screen and (max-width: 450px) {
      font-size: 14px;
    }

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
      cursor: pointer;
    }
  }
`;

const CreateStudyRoomList = () => {
  const initialValue = {
    tag: '',
    title: '',
    channel: '',
    link: '',
    start_date: '',
    end_date: '',
    question: '',
    FCFS: true,
    user_id: null,
    number_of_lectures: null,
    number_of_persons: 2,
    comment: '',
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
      const newInputValue = {
        ...studyRoomInfo,
        start_date: new Date(inputValue),
      };
      setStudyRoomInfo(newInputValue);
    } else if (name === 'end-date') {
      const newInputValue = {
        ...studyRoomInfo,
        end_date: new Date(inputValue),
      };
      setStudyRoomInfo(newInputValue);
    } else if (name === 'question') {
      const newInputValue = { ...studyRoomInfo, question: inputValue };
      setStudyRoomInfo(newInputValue);
    } else if (name === 'fcfs') {
      const newInputValue = { ...studyRoomInfo, FCFS: true };
      setStudyRoomInfo(newInputValue);
    } else if (name === 'no-fcfs') {
      const newInputValue = { ...studyRoomInfo, FCFS: false };
      setStudyRoomInfo(newInputValue);
    } else if (name === 'comment') {
      const newInputValue = { ...studyRoomInfo, comment: inputValue };
      setStudyRoomInfo(newInputValue);
    } else if (name === 'lecture') {
      const newInputValue = {
        ...studyRoomInfo,
        number_of_lectures: parseInt(inputValue),
      };
      setStudyRoomInfo(newInputValue);
    }
  };

  const roomInfo = {
    accessToken: '',
    room: studyRoomInfo,
  };

  useEffect(() => {
    console.log(roomInfo);
  }, [roomInfo]);

  const tagList = [
    '?????????',
    '??????',
    'IT',
    '??????',
    '??????',
    '??????',
    '??????',
    '??????/??????',
    '??????',
  ];

  let minDate = new Date(
    new Date().getTime() - new Date().getTimezoneOffset() * 60000
  )
    .toISOString()
    .slice(0, -8);

  const lectureNumList = [1, 2, 3, 4, 5];

  return (
    <>
      <ListContainer>
        <div className="image-section">
          <img src={youtube} />
        </div>
        <div className="tag-section">
          <div className="tag-section-input">
            <div>??????????????? ????????? ??????????????????</div>
            <br />
          </div>
          <div className="tag-select-option">
            <select
              name="tag"
              onChange={(e) => inputValueHandler(e, 'tag')}
              required
            >
              <option value="">??????</option>
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
              placeholder="???????????? ????????? ???????????????"
              onChange={(e) => inputValueHandler(e, 'title')}
            />
          </div>
          <div>
            <input
              name="channel"
              type="text"
              placeholder="????????? ?????? ????????? ???????????????"
              onChange={(e) => inputValueHandler(e, 'channel')}
            />
          </div>
          <div>
            <input
              name="link"
              type="text"
              placeholder="????????? ????????? ???????????????"
              onChange={(e) => inputValueHandler(e, 'link')}
            />
          </div>
        </div>
        <div className="date-section">
          <div className="start-text">????????? ?????????</div>
          <input
            name="start-date"
            type="datetime-local"
            min={minDate}
            onChange={(e) => inputValueHandler(e, 'start-date')}
          />
          <div>????????? ?????????</div>
          <input
            name="end-date"
            type="datetime-local"
            onChange={(e) => inputValueHandler(e, 'end-date')}
          />
        </div>
        <div className="lecture-section">
          <div className="lecture-text">????????? ??? ?????? ?????? ??????????????????</div>
          <select
            className="lecture-number"
            name="lecture"
            onChange={(e) => inputValueHandler(e, 'lecture')}
          >
            <option value="">??? ?????? ???</option>
            {lectureNumList.map((el, idx) => (
              <option key={idx} value={el}>
                {el}
              </option>
            ))}
          </select>
          <span>???</span>
        </div>
        <div className="radio-box-section">
          <input
            name="fcfs"
            id="first-come"
            type="radio"
            name="radio-answer"
            defaultChecked
            onClick={(e) => inputValueHandler(e, 'fcfs')}
          />
          <label id="first-come">?????????</label>
          <input
            name="no-fcfs"
            id="answer"
            type="radio"
            name="radio-answer"
            onClick={(e) => inputValueHandler(e, 'no-fcfs')}
          />
          <label id="answer">?????? ??????</label>
        </div>
        <div className="question-section">
          <div>????????? ???????????? ?????? ????????? ??????????????????</div>
          <br />
          <textarea
            name="question"
            onChange={(e) => inputValueHandler(e, 'question')}
          />
        </div>
        <div className="comment-section">
          <div>????????? ??????????????? ????????? ?????? ?????? ??????????????????</div>
          <br />
          <textarea
            name="comment"
            onChange={(e) => inputValueHandler(e, 'comment')}
          />
        </div>
        <div className="apply-button-section">
          <a href="/Main">
            <button>????????????</button>
          </a>
        </div>
      </ListContainer>
    </>
  );
};
export default CreateStudyRoomList;
