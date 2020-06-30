import React, { Component } from 'react';
import {Card,Container,Row} from 'react-bootstrap';

export class Ourteachers extends Component {
    render() {
        return (
            <div>
                <Container >
                    <Row>
                <Card style={{ width: '20rem', margin: 'auto' }}>
                <Card.Img variant="top" src="/images/bg.jpg" />
                    <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    </Card.Body>
                    </Card>
                <Card style={{ width: '20rem', margin: 'auto'}}>
                <Card.Img variant="top" src="/images/bg.jpg" />
                    <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    </Card.Body>
                    </Card>
                    <Card style={{ width: '20rem',margin: 'auto' }}>
                <Card.Img variant="top" src="/images/bg.jpg" />
                    <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    </Card.Body>
                    </Card>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Ourteachers;
