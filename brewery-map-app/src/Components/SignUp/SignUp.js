import React from "react";
import "./SignUp.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SignUp() {
  return (
    <div className="SignUp">
      <h1>Sign Up</h1>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text id="passwordHelpBlock" muted>
            Your password must be 8-20 characters long, contain letters and
            numbers, and must not contain spaces, special characters, or emoji.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Re-Enter Password</Form.Label>
          <Form.Control type="password" placeholder="Re-Enter Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default SignUp;
