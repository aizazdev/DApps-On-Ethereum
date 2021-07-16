import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
    const[myName, setMyName] = useState('');
    const[value, setValue] = useState(0);
    const dispatch = useDispatch();
    const counter = useSelector(({state})=> {return state.counter});
    const name = useSelector(({state})=>{console.log(state)});
    return (
        <div>
            <h2>counter {counter}</h2>
            <h2>Name {name}</h2>
            <button onClick={()=>dispatch({type: "INCREMENT"})}>Increment</button>
            <button onClick={()=>dispatch({type: "DECREMENT"})}>Decrement</button>
            <div>
                <input type="text" onChange={(e)=>setMyName(e.target.value)}></input>
            </div>
            
            <button onClick={()=>dispatch({type:'BY_NAME', data: myName})}>Set Name</button>
        </div>
    )
}

export default Counter;