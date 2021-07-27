import React,{useState, useEffect, useContext} from 'react';
import { DrizzleContext } from '@drizzle/react-plugin'

const DisplayString = ()=> {
    const {drizzle, drizzleState} = useContext(DrizzleContext.Context);

    const [dataKey, setdataKey] = useState(null);

    useEffect(() => {
        const contract = drizzle.contracts.Sample;
        const dataKey = contract.methods["myString"].cacheCall();
        setdataKey(dataKey);
    }, []);
    const { Sample } = drizzleState.contracts;
    const myString = Sample.myString[dataKey];

    return(
        <div>
            <h2>My stored string: {myString && myString.value}</h2>;
        </div>
    )
}

export default DisplayString;