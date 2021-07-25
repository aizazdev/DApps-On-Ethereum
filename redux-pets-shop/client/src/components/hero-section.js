import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

const Hero = ()=> {
    
    return(
        <Container fluid className="hero-section">
            <Row>
                <Col>
                    <h2>Pets Shop <br /> Decentralized App</h2>
                </Col>
            </Row>
        </Container>
    )
}
export default Hero;