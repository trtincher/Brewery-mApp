import React, { useState, useContext } from "react";
import { DataContext } from "../App/App";
import axios from "axios";
import "./LogIn.css";
import apiURL from "../../apiConfig";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function LogIn(props) {
  const { setActiveUser } = useContext(DataContext);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [isInvalid, setIsInvalid] = useState(false);

  console.log("user in LogIn", user);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("user in handleSubmit", user);
    //get user from database with email
    //if user not in database then show "email not found"
    //if user password invalid then show "invalid password"
    //if user email and password valid
    //add user object to active user
    //redirect to Map
    try {
      const response = await axios(`${apiURL}/users/${user.email}`);
      console.log("response in Login", response.data);

      if (response.data.length > 0) {
        setActiveUser(response.data);
        props.history.push("/");
      } else {
        setIsInvalid(true);
      }
    } catch (err) {
      console.error(err);
    }
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
