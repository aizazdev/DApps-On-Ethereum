import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { initWeb3 } from './store/adoptSlice';

function App() {

  const dispatch = useDispatch();
  const web3 = useSelector((state)=> console.log("state => ", state.adoptReducer.web3));
  useEffect(()=> {
    dispatch(initWeb3());
  });
  return (
    <div className="App">
      hello redux pets-shop
    </div>
  );
}

export default App;
