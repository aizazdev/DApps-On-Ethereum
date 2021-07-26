import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  
  const [loading, setloading] = useState(true);
  const [drizzleState, setdrizzleState] = useState(null);

  useEffect(() => {
    const{ drizzle } = props;
    const unsubscribe = drizzle.store.subscribe(() => {
      // every time the store updates, grab the state from drizzle
      const drizzleState = drizzle.store.getState();
      console.log("Drizzle ", drizzle);
      console.log("drizzle state ", drizzleState);
      // check to see if it's ready, if so, update local component state
      if (drizzleState.drizzleStatus.initialized) {
        setloading(false);
        setdrizzleState(drizzleState);
      }
    });
    return () => {
      unsubscribe();
    }
  }, [])

  if (loading) return "Loading Drizzle...";
  return <div className="App">Drizzle is ready</div>;
}

export default App;
