import React, { Component } from 'react';
import {Card,Container,Row} from 'react-bootstrap';

export class Ourteachers extends Component {
    render() {
        return (
            <div>
                <div class="ourteachers">
                <Container >
                    <Row>
                <Card style={{ width: '15rem', margin: 'auto' }}>
                <Card.Img variant="top" src="/images/bg.jpg" />
                    <Card.Body>
                    <Card.Title>Teacher Name</Card.Title>
                    <p>Subject</p>
                    </Card.Body>
                    </Card>
                <Card style={{ width: '15rem', margin: 'auto'}}>
                <Card.Img variant="top" src="/images/bg.jpg" />
                    <Card.Body>
                    <Card.Title>Teacher Name</Card.Title>
                    <p>Subject</p>
                    </Card.Body>
                    </Card>
                    <Card style={{ width: '15rem',margin: 'auto' }}>
                <Card.Img variant="top" src="/images/bg.jpg" />
                    <Card.Body>
                    <Card.Title>Teacher Name</Card.Title>
                    <p>Subject</p>
                    </Card.Body>
                    </Card>
                    </Row>
                </Container>
                </div>
            </div>
        );
    }
}

export default Ourteachers;
