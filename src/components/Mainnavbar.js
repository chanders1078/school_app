import React, { Component } from 'react'
import {Navbar,Nav,Container} from 'react-bootstrap';
import './Headercss.css';

export class Mainnavbar extends Component {
    render() {
        return (
            <div>
                <Container>
                <Navbar > 
                    <Navbar.Brand href="#"><img src={process.env.PUBLIC_URL + '/images/logo.png'}/></Navbar.Brand>
                    <Nav className="ml-auto">
                    <Nav.Link className="text-large" href="#">Home</Nav.Link>
                    <Nav.Link href="#">About</Nav.Link>
                    <Nav.Link href="#">Course</Nav.Link>
                    <Nav.Link href="#">Contact</Nav.Link>
                </Nav>
                </Navbar>
                </Container>
            </div>
        );
    }
}

export default Mainnavbar;
