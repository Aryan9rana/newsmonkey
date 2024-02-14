import React, { Component } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">News Monkey</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
            </ul>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Categories
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="/business">business</Dropdown.Item>
                <Dropdown.Item href="/entertainment">entertainment</Dropdown.Item>
                <Dropdown.Item href="/health">health</Dropdown.Item>
                <Dropdown.Item href="/science">science</Dropdown.Item>
                <Dropdown.Item href="/sports">sports</Dropdown.Item>
                <Dropdown.Item href="/technology">technology</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            
          </div>
        </div>
      </nav>
    );
  }
}