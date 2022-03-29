import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  border: 2px solid black;
  margin: 120px auto 100px;
  text-align: center;

  @media screen and (max-width: 750px) {
    margin-top: 70px;
  }

  .video-section {
    > iframe {
      width: 80%;
      height: 50vh;

      @media screen and (max-width: 750px) {
        width: 100%;
      }
    }
  }

  .user-info-section {
  }

  .button-section {
    > a button {
      margin: 20px;
      width: 20%;
      height: 10vh;
      border-radius: 1.5em;
      font-size: 15px;
      background-color: #faf2f2;
    }
  }
`;

const StudyRoomDetail = () => {
  return (
    <Container>
      <div>
        <h1>스터디룸 제목</h1>
      </div>
      <div className="video-section">
        <iframe
          src="https://www.youtube.com/embed/v67LloZ1ieI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="user-info-section">
        <h1>유저 정보</h1>
        <h1>유저 정보</h1>
        <h1>유저 정보</h1>
      </div>
      <div className="button-section">
        <a href="/reqstudyroom/1">
          <button>신청하기</button>
        </a>
        <a href="/note/1">
          <button>공유 노트</button>
        </a>
      </div>
    </Container>
  );
};

export default StudyRoomDetail;
