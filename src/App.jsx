import './App.css'
import Home from './components/Home';
import { add } from './maths';
import logo from "./assets/react.svg";
import Trainer from './components/Trainer';
import ConditionalRender from './components/ConditionalRender';
import ExternalTrainers from './components/ExternalTrainers';
import { Route, BrowserRouter as Router, Routes } from 'react-router';
import Props from './components/Props';
import Navbar from './components/Navbar';

function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/props' element={<Props />} />
        <Route path='/external' element={<ExternalTrainers />} />
      </Routes>
    </Router>
  );

}

export default App
