import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Shoes = () => {
  return (
    <Container className="shoes">
      <Row>
        <Col>
          <h1>Projects</h1>
        </Col>
      </Row>
      <Row className="shoes-row">
        <Col xs={12} sm={6} md={6} lg={4}>
          <div className="shoes-img-container">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
              alt=""
            />
          </div>
          <h3 className="text-center my-3">Expense Tracker DApp</h3>
          <p className="shoes-text">
            X marks the spot! We’ve hidden a few treasures in the park. Grab 3
            other new friends for a mythical adventure. We've placed some
            exclusive Epic gear around the park. Hike, explore, be the first to
            find the treasure. X marks the spot! We’ve hidden a few treasures in
            the park. Grab 3 other new friends for a mythical adventure.
          </p>
        </Col>
        <Col xs={12} sm={6} md={6} lg={4}>
          <div className="shoes-img-container">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
              alt=""
            />
          </div>
          <h3 className="text-center my-3">Pets-Shop DApp</h3>
          <p className="shoes-text">
            X marks the spot! We’ve hidden a few treasures in the park. Grab 3
            other new friends for a mythical adventure. We've placed some
            exclusive Epic gear around the park. Hike, explore, be the first to
            find the treasure. X marks the spot! We’ve hidden a few treasures in
            the park. Grab 3 other new friends for a mythical adventure.
          </p>
        </Col>
        <Col xs={12} sm={6} md={6} lg={4}>
          <div className="shoes-img-container">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
              alt=""
            />
          </div>
          <h3 className="text-center my-3">ERC721 DApp</h3>
          <p className="shoes-text">
            X marks the spot! We’ve hidden a few treasures in the park. Grab 3
            other new friends for a mythical adventure. We've placed some
            exclusive Epic gear around the park. Hike, explore, be the first to
            find the treasure. X marks the spot! We’ve hidden a few treasures in
            the park. Grab 3 other new friends for a mythical adventure.
          </p>
        </Col>
      </Row>
      <Row className="mb-4 mt-5">
        <Col md={8}>
          <div>
            <p className="vision">My' vision, Interest</p>
            <h2 className="text-align-left">
              You have arrived at the Silver Shoe Party
            </h2>
          </div>
        </Col>
        <Col md={4}>
          <p>
            X marks the spot! We’ve hidden a few treasures in the park. Grab 3
            other new friends for a mythical adventure. We've placed some
            exclusive Epic gear around the park. Hike, explore, be the first to
            find the treasure. X marks the spot! We’ve hidden a few treasures in
            the park. Grab 3 other new friends for a mythical adventure.
          </p>
        </Col>
      </Row>
      <Row className="border-top border-2 pt-4">
        <Col xs={6} sm={6} md={4} lg={3}>
          <div className="block-item">
            <div className="box"></div>
            <p>Ethereum</p>
          </div>
        </Col>
        <Col xs={6} sm={6} md={4} lg={3}>
          <div className="block-item">
            <div className="box"></div>
            <p>Solidity</p>
          </div>
        </Col>
        <Col xs={6} sm={6} md={4} lg={3}>
          <div className="block-item">
            <div className="box"></div>
            <p>Web3.js | Ether.js</p>
          </div>
        </Col>
        <Col xs={6} sm={6} md={4} lg={3}>
          <div className="block-item">
            <div className="box"></div>
            <p>ReactJs</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Shoes;
