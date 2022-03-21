import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [isClick, setClick] = useState('');
  const clickHandler = (e) => {
    axios
      .get('http://localhost:3000/test', {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })
      .then((data) => {
        setClick(data.data.data.test);
      });
  };
  return (
    <div>
      <button className="test-button" onClick={clickHandler}>
        {isClick}
      </button>
    </div>
  );
}

export default App;
