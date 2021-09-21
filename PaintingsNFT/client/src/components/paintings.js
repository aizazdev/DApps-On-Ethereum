import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { paintingsCount, getAllPaintings,transferNft } from '../store/paintingSlice';
import { Container, Row, Col, Card, Form, Button,Spinner, Overlay, Tooltip } from 'react-bootstrap';
import {Alerts} from './alert';

const Paintings = () => {
    const[id, setId] = useState(null);
    const { contract, address, web3, count, list } = useSelector(state => { return state.paintingReducer });
    const dispatch = useDispatch();
    const[transferAddress, setTransferAddress]= useState("");
    
    setTimeout(() => {
        dispatch(paintingsCount());
        dispatch(getAllPaintings(count));
    }, 1000);

    const handleSubmit = (e)=> {
        e.preventDefault();
        dispatch(transferNft({transferAddress, id}));
    }
    return (

        <Container>
            <Alerts />
            <Row>
                {(list.length == 0) ?   <Spinner animation="grow" />
                    :
                    list.map((l, ind) => {
                        return (
                            <Col xm={3} xs={4} key={ind}>
                                <Card>
                                    <Card.Img variant="top" src={`https://ipfs.io/ipfs/${l.imageHash}`} height="200" />
                                    <Card.Body>
                                        <Card.Title>Name: {l.name}</Card.Title>
                                        <Card.Text>
                                            Description: {l.description}
                                        </Card.Text>
                                        <Card.Text>
                                            Price: {l.price}
                                        </Card.Text>
                                        <Card.Text>
                                            Image Hash: {l.imageHash}
                                        </Card.Text>
                                    </Card.Body>
                          
                                </Card>
                                    <form onSubmit={handleSubmit}>
                                    <Row className="align-items-center">
                                    <Col xs="auto">
                                    <Form.Control size="sm" type="name" placeholder="Enter Address" 
                                        onChange={(e) => setTransferAddress(e.target.value)}
                                    required /><br />  
                                    </Col>
                                    <Col xs="auto">
                                    <Button className="mb-2" type="submit" value={l.tokenId} onClick={(e)=> setId(e.target.value)}>
                                    Transfer Nft
                                    </Button>
                                    </Col>
                                    </Row>
                                    </form>
                                    
                                
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    )
}

export default Paintings;