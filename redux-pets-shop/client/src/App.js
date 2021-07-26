import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { initWeb3 } from './store/adoptSlice';
import  Header from './components/header';
import Hero from './components/hero-section';
import Pets from './components/pets';
import img from './images/hero.jpg';
function App() {

  const dispatch = useDispatch();
    useEffect(()=> {
      dispatch(initWeb3());
    });

  return (
    <div className="App">
      <Hero />
      <Header />
      <Pets />
    </div>
  );
}

export default App;
