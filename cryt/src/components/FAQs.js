import React from "react";
import { useState } from "react";
import { Accordion, Card, Container } from "react-bootstrap";

const FAQs = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="faq-section">
      <Container>
        <h1 className="text-center">FAQ</h1>
        <Accordion className="mt-4">
          <div className="acc">
            <Accordion.Toggle
              onClick={() => (active === 1 ? setActive(0) : setActive(1))}
              className={`accordianHeader ${active === 1 ? "active" : ""} `}
              as={Card.Header}
              eventKey="1"
            >
              <div className="accordian-head">
                <span>Can I trial Webflow before paying?</span>
                <img
                  className="arrowAccordian"
                  width="17"
                  src="images/arrow-down.svg"
                  alt=""
                />
              </div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                Sure! You can test out Webflow on our free plan where you can
                experiment with 2 projects. Your unhosted projects will have a
                two-page limit, but you can purchase a site plan on a
                per-project basis to unlock up to 100 static pages and
                additional CMS pages.
              </Card.Body>
            </Accordion.Collapse>
          </div>
          <div className="acc">
            <Accordion.Toggle
              onClick={() => (active === 2 ? setActive(0) : setActive(2))}
              className={`accordianHeader ${active === 2 ? "active" : ""}`}
              as={Card.Header}
              eventKey="2"
            >
              <div className="accordian-head">
                <span>What is a project?</span>
                <img
                  className="arrowAccordian"
                  width="17"
                  src="images/arrow-down.svg"
                  alt=""
                />
              </div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                A project is a website that you build in Webflow. You can
                publish projects to a webflow.io staging subdomain for free,
                export the code on a paid plan, or add a site plan to connect
                your custom domain and unlock hosting features.
              </Card.Body>
            </Accordion.Collapse>
          </div>
          <div className="acc">
            <Accordion.Toggle
              onClick={() => (active === 3 ? setActive(0) : setActive(3))}
              className={`accordianHeader ${active === 3 ? "active" : ""}`}
              as={Card.Header}
              eventKey="3"
            >
              <div className="accordian-head">
                <span>What can I white label?</span>
                <img
                  className="arrowAccordian"
                  width="17"
                  src="images/arrow-down.svg"
                  alt=""
                />
              </div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                Pro accounts can add their own logo to Client Billing forms and
                the Editor. Pro accounts can also remove references to Webflow
                in the source code and form submission emails, and hide the
                Webflow badge from their staging sites.
              </Card.Body>
            </Accordion.Collapse>
          </div>

          <div className="acc">
            <Accordion.Toggle
              onClick={() => (active === 4 ? setActive(0) : setActive(4))}
              className={`accordianHeader ${active === 4 ? "active" : ""}`}
              as={Card.Header}
              eventKey="4"
            >
              <div className="accordian-head">
                <span>How much traffic can the hosting handle?</span>
                <img
                  className="arrowAccordian"
                  width="17"
                  src="images/arrow-down.svg"
                  alt=""
                />
              </div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                Webflow hosting scales automatically to handle millions of
                concurrent visits. All site plans serve sites through our
                Amazon's Cloudfront CDN and accelerated using Fastly, loading
                sites in milliseconds.
              </Card.Body>
            </Accordion.Collapse>
          </div>

          <div className="acc">
            <Accordion.Toggle
              onClick={() => (active === 5 ? setActive(0) : setActive(5))}
              className={`accordianHeader ${active === 5 ? "active" : ""}`}
              as={Card.Header}
              eventKey="5"
            >
              <div className="accordian-head">
                <span>What kind of support does Webflow provide?</span>
                <img
                  className="arrowAccordian"
                  width="17"
                  src="images/arrow-down.svg"
                  alt=""
                />
              </div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="5">
              <Card.Body>
                We offer fast email support to paid accounts and prioritized
                help for team accounts. Community support (forum.webflow.com) is
                available to free accounts.
              </Card.Body>
            </Accordion.Collapse>
          </div>

          <div className="acc">
            <Accordion.Toggle
              onClick={() => (active === 6 ? setActive(0) : setActive(6))}
              className={`accordianHeader ${active === 6 ? "active" : ""}`}
              as={Card.Header}
              eventKey="6"
            >
              <div className="accordian-head">
                <span>How long does it take to learn Webflow?</span>
                <img
                  className="arrowAccordian"
                  width="17"
                  src="images/arrow-down.svg"
                  alt=""
                />
              </div>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="6">
              <Card.Body>
                If you're new to building websites, our video tutorials will get
                up and running quickly. If you already know concepts behind CSS
                and the box model, you will feel at home in Webflow.
              </Card.Body>
            </Accordion.Collapse>
          </div>
        </Accordion>
      </Container>
    </div>
  );
};

export default FAQs;
