import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import {Check2Circle} from 'react-bootstrap-icons';
const Header = ()=> {

    const address = useSelector((state)=> { return state.adoptReducer.address });
    return(
        <Container fluid className="header">
            <Row>
                <Col>
                    {(address) ?  <div className="address"><Check2Circle size={30} /><span> Address: {address} </span></div> : <span>Address: Null</span> }
                </Col>
                <Col>
                    {(address) ?  <div className="metamask"><Check2Circle size={30} /><span> Metamask Connected </span></div> : <span>Metamask Not Connected</span> }  
                </Col>
            </Row>    
        </Container>
    )
}
export default Header;