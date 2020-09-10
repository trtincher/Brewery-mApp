import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/Nav";

const LinkDiv = styled.div`
  display: flex;
  flex-direction: column;
  a {
    color: Black;
    padding: 1rem;
  }
  @media screen and (min-width: 993px) {
    flex-direction: row;
    margin-left: 30rem;
  }
`;

function Header() {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Navbar.Brand href="#home">Brewery mApp</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkDiv>
            <Link to="/">Map</Link>
            <Link to="/about">About</Link>
            <Link to="/collections">Collections</Link>
            <Link to="/search">Search</Link>
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign up</Link>
            <Link to="/">Log Out</Link>
          </LinkDiv>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
