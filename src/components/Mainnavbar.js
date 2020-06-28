import React, { Component } from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap';
import './Headercss.css';

export class Mainnavbar extends Component {
    render() {
        return (
            <div>
                <Container>
                <Navbar className="nav" > 
                    <Navbar.Brand href="#"><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="logo"/></Navbar.Brand>
                    <Nav className="ml-auto">
                    <Nav.Link className="nav" href="#">Home</Nav.Link>
                    <Nav.Link className="nav" href="#">About</Nav.Link>
                    <Nav.Link className="nav" href="#">Course</Nav.Link>
                    <Nav.Link className="nav" href="#">Contact</Nav.Link>
                </Nav>
                </Navbar>
                </Container>
            </div>
        );
    }
}

export default Mainnavbar;
