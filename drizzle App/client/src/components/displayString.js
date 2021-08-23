import React,{useState, useEffect, useContext} from 'react';
import { DrizzleContext } from '@drizzle/react-plugin'

const DisplayString = ()=> {
    const {drizzle, drizzleState} = useContext(DrizzleContext.Context);

    const [dataKey, setdataKey] = useState(null);

    useEffect(() => {
        const contract = drizzle.contracts.PaitingsNFT;
        const dataKey = contract.methods["symbol"].cacheCall();
       console.log('datakey',dataKey);
        setdataKey(dataKey);
    }, []);

    const DR = drizzleState.contracts;
    console.log("dr" , DR);    

    return(
        <div>
            <h2>My stored string: </h2>;
        </div>
    )
}

export default DisplayString;