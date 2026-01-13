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
import TrainerById from './components/TrainerById';
import EventHandling from './components/EventHandling';
import State from './components/State';
import Effect from './components/Effect';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/props' element={<Props />} />
        <Route path='/external' element={<ExternalTrainers />} />
        <Route path='/external/:id' element={<TrainerById />} />
        <Route path='/events' element={<EventHandling />} />
        <Route path='/state' element={<State />} />
        <Route path='/effect' element={<Effect />} />
      </Routes>
    </Router>
  );

}

export default App
