import React, { useState } from "react";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import "./NavBar.css";

const NavBar = ({ data, onSearch }) => {
  const [input, setInput] = useState("");
  console.log(input);
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Inspirational-quotes</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"></Nav>

        <Form inline className="searchBar">
          <FormControl
            value={input}
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            onChange={(event) => {
              setInput(event.target.value);
            }}
          />
          <Button
            variant="outline-success"
            onClick={() => {
              onSearch(input);
            }}
          >
            Search
          </Button>
        </Form>

        <div className="button-group">
          <Button variant="success" onClick={data}>
            Random
          </Button>{" "}
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
