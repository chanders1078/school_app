import React, { Component } from 'react';
import './Headercss.css';
import {Navbar,Nav,Container} from 'react-bootstrap';

export class Headertop extends Component {
    render() {
        return (
            <div className="header-top">
                <Container>
                    <Navbar>
                        <Nav className="mr-auto">
                            <p className="contact-info"><i class="fas fa-phone-alt"></i>+9998845654</p>
                            <p className="contact-info"><i class="fas fa-envelope"></i>GSSS@gmail.com</p>
                        </Nav>
                        <Nav className="ml-auto login-info">
                            <Nav.Link href="#"  style={{color: 'white', textDecoration: 'none'}} activeStyle={{color: 'blue', textDecoration: 'none'}}><i class="fas fa-sign-in-alt"></i>Login</Nav.Link>
                            <Nav.Link href="#"  style={{color: 'white', textDecoration: 'none'}} activeStyle={{color: 'blue', textDecoration: 'none'}}><i class="fas fa-user-plus"></i>SingUp</Nav.Link>
                        </Nav>
                    </Navbar>
                </Container>
            </div>
        );
    }
}

export default Headertop;
