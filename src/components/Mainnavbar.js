import React, { Component } from 'react';
import { Collapse, Navbar,Nav,Container} from 'react-bootstrap';
import './Headercss.css';

export class Mainnavbar extends Component {
        render() {
        return (
            <div>
                <Container>
                <Navbar className="nav" expand="lg" > 
                    <Navbar.Brand href="#"><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="logo"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <Nav.Link className="nav" href="/">Home</Nav.Link>
                    <Nav.Link className="nav" href="#">About</Nav.Link>
                    <Nav.Link className="nav" href="#">Course</Nav.Link>
                    <Nav.Link className="nav" href="#">Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>
                </Navbar>
                </Container>
            </div>
        );
    }
}

export default Mainnavbar;
