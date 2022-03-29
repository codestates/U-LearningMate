import './App.css';
import { BrowserRouter, Link, Route, Router, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import Main from './pages/Main';
import Myinfo from './pages/MyPage-myinfo';
import Mylist from './pages/MyPage-mylist';
import StudyRoom from './pages/StudyRoom';
import Note from './pages/Note';
import ReqStudyRoom from './pages/ReqStudyRoom';
import CreateStudyRoom from './pages/CreateStudyRoom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route path="/main">
            <Main />
          </Route>
          <Route path="/mypage/myinfo">
            <Myinfo />
          </Route>
          <Route path="/mypage/mylist">
            <Mylist />
          </Route>
          <Route path="/studyroom/:id">
            <StudyRoom />
          </Route>
          <Route path="/note/:id">
            <Note />
          </Route>
          <Route path="/createstudyroom">
            <CreateStudyRoom />
          </Route>
          <Route path="/reqstudyroom/:id">
            <ReqStudyRoom />
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
