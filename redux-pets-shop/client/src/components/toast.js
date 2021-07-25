import React, {useState} from 'react';
import {Toast, Col, Row, Button} from 'react-bootstrap';

const ShowToast = ()=> {
    const [show, setShow] = useState(false);
  
    return (
      <Row>
        <Col xs={12}>
          <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto"></strong>
            </Toast.Header>
            <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
          </Toast>
        </Col>
      </Row>
    );
  }
export default ShowToast;