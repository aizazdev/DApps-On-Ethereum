import{useState, useEffect} from 'react';
import './App.css';
import {useDispatch} from 'react-redux';
import MyNavbar from './components/navbar';
import { initWeb3,paintingsCount } from './store/paintingSlice';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter 
} from "react-router-dom";
import AddNFT from './components/addNFT';
import Paintings from './components/paintings';
import Web3 from 'web3';

function App() {

  const dispatch = useDispatch();
  
  useEffect(async () => {
    dispatch(initWeb3());
  }, []);


  return (
    <div>
      <MyNavbar /><br />
    </div>
  );
}

export default App;
