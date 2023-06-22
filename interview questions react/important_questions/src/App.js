import logo from './logo.svg';
import './App.css';
import Gettimeout from './components/Gettimeout';
import GetTimeout1 from './components/GetTimeout1';
import { useRef } from 'react';

function App() {
  let intervalID=useRef()

  function handleClick(){
    clearTimeout(intervalID.current)
    console.log("in",intervalID.current)
intervalID.current=setTimeout(() => {
  console.log("api called")
}, 3000);
  }
  return (
    <div className="App">
    <Gettimeout/>
    <GetTimeout1/>
    <button onClick={()=>handleClick()}>call api</button>
    </div>
  );
}

export default App;
