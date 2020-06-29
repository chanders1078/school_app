import React from 'react';
import {Container, Form, Button} from 'react-bootstrap';
class Login extends React.Component {
    render() {
      return (
        <Container>
            <h3 className="text-center">Login Here</h3>
        <Form> 
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email: </Form.Label> 
                    <Form.Control type="email" size="sm" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password: </Form.Label>
                    <Form.Control type="password" size="sm" placeholder="Enter Password"/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </Container>
      );
    }
  }
export default Login;