import React from 'react';
import { Alert } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export const Alerts = () => {

    const { web3, contract, address } = useSelector((state) => state.paintingReducer);

    return (
        <>
            {(!web3) ? 
            <>
            <Alert variant="danger">
                <Alert.Link href="#">Metamask</Alert.Link>. Not Connected
            </Alert>
            <Alert variant="danger">
                <Alert.Link href="#">Address</Alert.Link>. 0X00000000000000000000
            </Alert>
            </>
                :
            <>
            <Alert variant="primary">
                <Alert.Link href="#">Metamask</Alert.Link>. Connected
            </Alert>
            <Alert variant="primary">
                <Alert.Link href="#">Address: </Alert.Link>. {address} 
            </Alert>
            </>
            }

        </>
    )
}