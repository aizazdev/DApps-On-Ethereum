import React, {useState, useEffect, useContext} from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayString from './components/displayString';
import SetString from './components/setString';
import { DrizzleContext } from '@drizzle/react-plugin'
import ipfs from './ipfs';

function App() {
  
  const drizzleData = useContext(DrizzleContext.Context);
  let imageBuffer;
  const captureFile = async(e)=> {
    e.preventDefault();
    const file = e.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = async()=> {
      imageBuffer = Buffer(reader.result);
      console.log("Image buffer ", imageBuffer); 
    }
  }
  const handleSubmit = async(e)=> {
    e.preventDefault();
    await ipfs.files.add(imageBuffer, (error, result)=> {
      if(error) {
        console.log("error ", error);
      }
      console.log("resukt", result[0].hash);
    });
    console.log("submit");
  }
  if (!drizzleData.initialized) return "Loading Drizzle...";
  return (
    <div className="App">
      <DisplayString  />
      <SetString  />
      <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Upload photo</legend>
        <input type="file" name="photo" id="photo" onChange={captureFile} />
        <button type="submit">Upload</button>
      </fieldset>
    </form>
    </div>
  )
}

export default App;
