import React from 'react';
import {Container, Form, Button} from 'react-bootstrap';
class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {email:'',
                pass:''};
    this.handleEmail=this.handleEmail.bind(this);
    this.handlePass=this.handlePass.bind(this);
  }
  handleEmail(event){this.setState({email:event.target.value}); }
  handlePass(event) {this.setState({pass:event.target.value}); }
    render() {
      return (
        <Container>
            <h3 className="text-center">Login Here</h3>
        <Form> 
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email: </Form.Label> 
                    <Form.Control type="email" size="sm" placeholder="Enter email" value={this.state.email} onChange={this.handleEmail}/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password: </Form.Label>
                    <Form.Control type="password" size="sm" placeholder="Enter Password" value={this.state.pass} onChange={this.handlePass}/>
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