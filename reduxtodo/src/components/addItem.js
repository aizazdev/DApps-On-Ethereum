import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, by_value } from '../store/actions';

const AddItems = ()=> {
    const[value, setValue] = useState("");

    const dispatch = useDispatch();
    const counter = useSelector((state)=> {return state.counter});
    return(
        <div>
            <button onClick={()=>{dispatch(increment())}}>Increment</button>
            <div>counter {counter}</div>
            <button onClick={()=>{dispatch(decrement)}}>Decrement</button><br />
            <input type="text" onChange={(e)=>setValue(e.target.value)}></input>
            <button onClick={()=>{dispatch(by_value)}}>By Value</button>
        </div>
    )
}
export default AddItems;