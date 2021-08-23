import React from 'react';
import { Navbar,Container, Nav, NavDropdown} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddNFT from './addNFT';
import Paintings from './paintings';
const MyNavbar = ()=> {
    return (
        <Router>
      <div>
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">
                    <Link to="/" className="nav-links">Paintings NFT</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Link to="/addnft" className="nav-links">Sell NFT</Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
      </div>
    </Router>
  );
}
export default MyNavbar;