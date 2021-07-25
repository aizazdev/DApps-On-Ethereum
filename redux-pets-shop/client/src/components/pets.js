import React, {useState} from 'react';
import petsList from '../pets.json';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import img from '../images/hero.jpg';
import { adopt, adoptPet } from '../store/adoptSlice';

const Pets = () => {
    
    const [id, setId] = useState(null);
    const dispatch = useDispatch();
    const {adopters, contract, address} = useSelector((state)=>{return state.adoptReducer});
    const {loadingPet, rejectedPet, errorMessage} = useSelector((state)=>{return state.adoptReducer} );
    return (
        <Container>
            {(loadingPet == true) ? <h2>Loading</h2> :  "" }
            {(rejectedPet == true) ? <h2>{errorMessage} </h2> : "" }
            
            <Row>
                {petsList.map((pet, ind) => {
                    return (
                        <Col sm={4} key={ind}> 
                            <Card className="text-center">
                                <Card.Img variant="top" src={pet.picture} height="200px"/>
                                <Card.Header>Name: {pet.name}</Card.Header>
                                <Card.Body>
                                    <Card.Title>Location: {pet.location}</Card.Title>
                                    <Card.Title>Age: {pet.age}</Card.Title>
                                    {adopters[pet.id] === "0x0000000000000000000000000000000000000000" ? 
                                    <Button variant="primary" value={pet.id} onClick={(e)=> {
                                        // adoptPet(e.target.value);
                                        dispatch(adoptPet(pet.id));                 
                                    }} >Adopt</Button> : 
                                    <Button disabled variant="primary">Adopted</Button>
                                    }
                                </Card.Body>
                                <Card.Footer className="text-muted">{adopters[pet.id] !== "0x0000000000000000000000000000000000000000" ? adopters[pet.id] : "" }</Card.Footer>
                            </Card><br />
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default Pets;