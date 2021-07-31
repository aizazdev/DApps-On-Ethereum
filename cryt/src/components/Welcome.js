import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Welcome = () => {
  return (
    <Container name="overview" id="overview" className="welcome">
      <Row>
        <Col>
          <h1>Welcome</h1>
        </Col>
      </Row>
      <Row className="welcome-row">
        <Col xs={12} sm={6} md={6} lg={4}>
          <p>
            X marks the spot! We’ve hidden a few treasures in the park. Grab 3
            other new friends for a mythical adventure. We've placed some
            exclusive Epic gear around the park. Hike, explore, be the first to
            find the treasure. X marks the spot! We’ve hidden a few treasures in
            the park. Grab 3 other new friends for a mythical adventure.
          </p>
        </Col>
        <Col xs={12} sm={6} md={6} lg={4}>
          <p>
            X marks the spot! We’ve hidden a few treasures in the park. Grab 3
            other new friends for a mythical adventure. We've placed some
            exclusive Epic gear around the park. Hike, explore, be the first to
            find the treasure. X marks the spot! We’ve hidden a few treasures in
            the park. Grab 3 other new friends for a mythical adventure.
          </p>
        </Col>
        <Col xs={12} sm={6} md={6} lg={4}>
          <p>
            X marks the spot! We’ve hidden a few treasures in the park. Grab 3
            other new friends for a mythical adventure. We've placed some
            exclusive Epic gear around the park. Hike, explore, be the first to
            find the treasure. X marks the spot! We’ve hidden a few treasures in
            the park. Grab 3 other new friends for a mythical adventure.
          </p>
        </Col>
      </Row>

      <Row>
        <Col xs={6} sm={6} md={4} lg={2}>
          <div className="block-item">
            <div className="box"></div>
            <p>This is some text inside of a div block.</p>
          </div>
        </Col>
        <Col xs={6} sm={6} md={4} lg={2}>
          <div className="block-item">
            <div className="box"></div>
            <p>This is some text inside of a div block.</p>
          </div>
        </Col>
        <Col xs={6} sm={6} md={4} lg={2}>
          <div className="block-item">
            <div className="box"></div>
            <p>This is some text inside of a div block.</p>
          </div>
        </Col>
        <Col xs={6} sm={6} md={4} lg={2}>
          <div className="block-item">
            <div className="box"></div>
            <p>This is some text inside of a div block.</p>
          </div>
        </Col>
        <Col xs={6} sm={6} md={4} lg={2}>
          <div className="block-item">
            <div className="box"></div>
            <p>This is some text inside of a div block.</p>
          </div>
        </Col>
        <Col xs={6} sm={6} md={4} lg={2}>
          <div className="block-item">
            <div className="box"></div>
            <p>This is some text inside of a div block.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Welcome;
