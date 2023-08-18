import logo from './logo.svg';
import './App.css';
import Gettimeout from './components/Gettimeout';
import GetTimeout1 from './components/GetTimeout1';
import { useRef, useState } from 'react';
import Todo from './PureComponents/Todo';

function App() {
  let intervalID=useRef()
const [state,setState]=useState(0);
  function handleClick(){
    clearTimeout(intervalID.current)
    // console.log("in",intervalID.current)
intervalID.current=setTimeout(() => {
  // console.log("api called")
}, 3000);
  }
  function handlestate(){
    setState((prev)=>prev+1); //1
    setState((prev)=>prev+1); //2
    setState((prev)=>prev+1);
    setState((prev)=>prev+1);
    setState((prev)=>prev+1);

  }
  function handlestate(){
    setState(state+1);  //1
    setState(state+1); //1
    setState(state+1);
    setState(state+1);
    setState(state+1);

  }
  console.log(state,"state")
  return (
    <div className="App">
    {/* <Gettimeout/>
    <GetTimeout1/>
    <button onClick={()=>handleClick()}>call api</button> */}
    {/* <Todo/> */}
<h1>{state}</h1>
<button onClick={handlestate}>Click</button>
    </div>
  );
}

export default App;
