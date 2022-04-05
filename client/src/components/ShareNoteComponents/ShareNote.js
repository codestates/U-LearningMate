import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  max-width: 1200px;
  border: 2px solid black;
  margin: 120px auto 20px;
`;

const UserContainer = styled.div`
  min-width: 50%;
  border: 1px solid blue;
  text-align: center;
`;

const ShareNote = () => {
  return (
    <>
      <Container>
        <UserContainer>
          <div className="user-section">
            <h1>user1</h1>
          </div>
          <div className="note-section">
            <h1>note section</h1>
          </div>
          <div className="input-section">
            <h1>input section</h1>
            <textarea></textarea>
          </div>
          <div className="note-button">
            <h1>send button</h1>
            <button>send</button>
          </div>
        </UserContainer>
        <UserContainer>
          <div className="user-section">
            <h1>user2</h1>
          </div>
          <div className="note-section">
            <h1>note section</h1>
          </div>
          <div className="input-section">
            <h1>input section</h1>
            <textarea></textarea>
          </div>
          <div className="note-button">
            <h1>send button</h1>
            <button>send</button>
          </div>
        </UserContainer>
      </Container>
    </>
  );
};

export default ShareNote;
