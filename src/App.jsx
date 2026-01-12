import './App.css'
import Home from './components/Home';
import { add } from './maths';
import logo from "./assets/react.svg";
import Trainer from './components/Trainer';


function App() {

  const hello = "Hello, world!";
  return (
    <div class='app-div'>
      <h1>HELLO!</h1>
      <Home />
      {
        Home()
      }
      <img src={logo} alt="" />

      <p>hello</p>
      <p>{hello}</p>
      <p>2 + 2 = {add(2, 2)}</p>
      <div>
        <h2>Props</h2>
        <Trainer name="JH" age={31} specialism="Java"/>
        <Trainer name="CG" age={32} specialism="Web"/>
        {
          Trainer({name: "MS", age: 42})
        }
      </div>
    </div>
  );

}

export default App
