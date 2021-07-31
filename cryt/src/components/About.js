import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Parallax } from "react-parallax";

const About = () => {
  return (
    <div name="about">
      <Parallax bgImage={"images/bg1x.jpg"} strength={-150}>
        <Container className="pb-5">
          <Row className="my-4 pt-4">
            <Col sm={12}>
              <h1 className="text-white ">About Me</h1>
            </Col>
            <Col md={8} lg={6}>
              <p className="text-light">
                Just like you, we believe in the potential of NFTs and
                Blockchain. With our product and user-focused background, we
                have taken the time to analyze various drops and understand the
                future application areas where an individual can be part of
                something bigger. We believe in the Creator Economy and want to
                challenge the influence of many in a collective. Decentralized
                opportunities will change the world and we want to help shape it
                for good.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col xs={12} sm={6} md={6} lg={4}>
              {/* <div className="about-item">
                <div className="img-person">
                  <img src="images/sarah0.jpg" alt="" />
                </div>
                <h4 className="text-light text-center my-4">SARAH KUEHNLE</h4>
              </div> */}
            </Col>
            <Col xs={12} sm={6} md={6} lg={4}>
              <div className="about-item">
                <div className="img-person">
                  <img src="images/zhenya0.jpg" alt="" />
                </div>
                <h4 className="text-light text-center my-4">Aizaz Ahmad</h4>
              </div>
            </Col>
            <Col xs={12} sm={6} md={6} lg={4}>
              {/* <div className="about-item">
                <div className="img-person">
                  <img src="images/pablo0.jpg" alt="" />
                </div>
                <h4 className="text-light text-center my-4">PABLO STANLEY</h4>
              </div> */}
            </Col>
          </Row>
        </Container>
      </Parallax>
    </div>
  );
};

export default About;
