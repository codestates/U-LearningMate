import styled from 'styled-components';

const Container = styled.div`
  max-width: 700px;
  margin: 100px auto 100px;
  text-align: center;
  border: 1px solid black;

  @media screen and (max-width: 750px) {
    margin-top: 70px;
  }

  .room-title {
    border: 1px solid;
  }

  .room-info {
  }

  .room-question {
    border: 1px solid;
  }

  .room-answer {
    > textarea {
      width: 50%;
      height: 50px;
    }
  }

  .room-request-button {
    margin: 20px;

    > a button {
      width: 50%;
      height: 50px;
    }
  }
`;

const ReqStudyPage = () => {
  return (
    <Container>
      <div className="room-title">
        <h1>스터디룸 제목</h1>
      </div>
      <div className="room-info">
        <h1>스터디룸 정보</h1>
        <h1>스터디룸 정보</h1>
        <h1>스터디룸 정보</h1>
        <h1>스터디룸 정보</h1>
        <h1>스터디룸 정보</h1>
      </div>
      <div className="room-question">
        <h1>스터디룸 질문</h1>
      </div>
      <div className="room-answer">
        <h1>스터디룸 답변</h1>
        <textarea></textarea>
      </div>
      <div className="room-request-button">
        <a href="/Main">
          <button>신청완료</button>
        </a>
      </div>
    </Container>
  );
};

export default ReqStudyPage;
