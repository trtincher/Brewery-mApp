import React, { useState } from "react";
import "./LogIn.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function LogIn() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  console.log("user in LogIn", user);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("user in handleSubmit", user);
  };

  return (
    <div className="LogIn">
      <h1>Log In</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={user.email}
            name="email"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={user.password}
            name="password"
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default LogIn;
