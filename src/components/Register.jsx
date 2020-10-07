import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Register extends React.Component {
    state = { 
        email: "",
        password: "",
        username: "",
        name: "",
        role: "",
        staffId: "",
        position: "",
        department: ""
     }
    render() { 
        this.handleSubmit = (event, email, password, username, name, role, staffId, position, department) => {

        }
        return ( 
            <div className="container">
            <div className="mt-5"><h4>STAFF REGISTRATION</h4></div>
        <Form onSubmit={this.handleSubmit}>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input onChange={this.handleChange} type="email" name="email" id="email" placeholder="Your Valid Email" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input onChange={this.handleChange} type="password" name="password" id="password" placeholder="Your Password" />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="name">Full Name</Label>
            <Input onChange={this.handleChange} type="text" name="name" id="name" placeholder="Your Name"/>
          </FormGroup>
          
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="role">Username</Label>
                <Input onChange={this.handleChange} type="text" name="username" id="username"/>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleState">Role</Label>
                <Input onChange={this.handleChange} type="text" name="role" id="role"/>
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="staffID">Staff ID</Label>
                <Input onChange={this.handleChange} type="text" name="staffID" id="staffID"/>
              </FormGroup>  
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="position">Position</Label>
                <Input onChange={this.handleChange} type="text" name="position" id="position" placeholder="e.g Staff, Admin" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="password">Department</Label>
                <Input onChange={this.handleChange} type="text" name="department" id="department" placeholder="e.g IT, Accounting" />
              </FormGroup>
            </Col>
          </Row>
          <Button>Sign in</Button>
        </Form>
    
        </div>
         );
    }
}
 
export default Register;
