import React, {useEffect, useState} from 'react';
import {Container, Row, Col, Form,Button} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import Paintings from '../contracts/PaitingsNFT.json';
import { addPainting,getAllPaintings } from '../store/paintingSlice';
import ipfs from '../ipfs';
import Web3 from 'web3';

const AddNFT = ()=> {
    const[name, setName] = useState('');
    const[price, setPrice] = useState(0);
    const[description, setDescription] = useState('');
    const[hash, setHash] = useState('');

    const {contract, address, web3} = useSelector(state => {return state.paintingReducer});
    const dispatch = useDispatch();

    let imageBuffer;
    const captureFile = async(e)=> {
    e.preventDefault();

    const reader = new FileReader();
        reader.readAsArrayBuffer(e.target.files[0]);
        reader.onload = async()=> {
            imageBuffer = Buffer(reader.result);
            console.log("Image Buffer => ", imageBuffer);
        }
    }

    const handleSubmit = async(e)=> {
        e.preventDefault();
        const {path} = await ipfs.add(imageBuffer);
        console.log("path", path);
        dispatch(addPainting({name, price, description, path}));
    }
    return(
        <Container><br />
            <Row>
                <Col xm={3} xs={2}></Col>
                <Col xm={6} xs={8}>
                <>
                    <form onSubmit={handleSubmit}>
                        <Form.Control size="sm" type="name" onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" required /><br />
                        <Form.Control size="sm" type="number" onChange={(e)=>setPrice(e.target.value)} placeholder="Enter Price" required/><br />
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Enter Description</Form.Label>
                            <Form.Control as="textarea" onChange={(e)=>setDescription(e.target.value)} rows={3} required/>
                        </Form.Group>
                        <Form.Group controlId="formFileSm" className="mb-3">
                            <Form.Control type="file" size="sm" onChange={captureFile} required/>
                        </Form.Group>
                        <Button type="submit">Add NFT</Button>
                    </form>
                </>
                </Col>
                <Button onClick={()=>{dispatch(getAllPaintings(1))}}>Get paintngs</Button>
                <Col xm={3} xs={2}></Col>
            </Row>
        </Container> 
    )
}
export default AddNFT;