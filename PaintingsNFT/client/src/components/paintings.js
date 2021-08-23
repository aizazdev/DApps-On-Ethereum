import React from 'react';
import {useSelector} from 'react-redux';
import {getAllPaintings} from '../store/paintingSlice';

const Paintings = ()=> {
    const state = useSelector(state => console.log("paintings state", state.paintingReducer));
    return(
        <div>Paintings</div>
    )
}

export default Paintings;