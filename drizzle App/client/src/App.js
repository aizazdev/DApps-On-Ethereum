import React, {useState, useEffect, useContext} from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayString from './components/displayString';
import SetString from './components/setString';
import { DrizzleContext } from '@drizzle/react-plugin'

function App() {
  
  const drizzleData = useContext(DrizzleContext.Context);
  if (!drizzleData.initialized) return "Loading Drizzle...";
  return (
    <div className="App">
      <DisplayString  />
      <SetString  />
    </div>
  )
}

export default App;
