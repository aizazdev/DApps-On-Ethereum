import{useState, useEffect} from 'react';
import './App.css';
import {useDispatch} from 'react-redux';
import MyNavbar from './components/navbar';
import { initWeb3 } from './store/paintingSlice';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddNFT from './components/addNFT';
import Paintings from './components/paintings';
import web3 from 'web3';

function App() {
  const dispatch = useDispatch();

  useEffect(async () => {
    dispatch(initWeb3());
  }, []);


  return (
    <div>
      <MyNavbar /><br />
      <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Paintings}></Route>
          <Route path="/addnft" component={AddNFT}></Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
