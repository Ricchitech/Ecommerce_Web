import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {signout} from '../../actions';
import "./style.css";
/**
 * @author Bharathraj
 * @function Header
 **/

const Header = (props) => {
const auth = useSelector((state) => state.auth);
const dispatch = useDispatch();
const logout = ()=>{
  dispatch(signout());
}

  const renderLoggedInLinks = () => {
    return (
      <Nav className="navbar">
        <div>
          <li className="nav-item">
            <span className="nav-link" onClick={logout}>
              Signout
            </span>
          </li>
        </div>
      </Nav>
    );
  };


  const renderNonLoggedInLinks = () => {
    return (
      <Nav>
        <div className="navbar">
          <li className="nav-item">
            <NavLink to="/signin" className="nav-link">
              Signin
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/signup" className="nav-link">
              Signup
            </NavLink>
          </li>
        </div>
      </Nav>
    );
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      style={{ zIndex: 1 }}
    >
      <Container fluid>
        <div className="navbar-brand">
          <h3>
            <Link to="/">
              <span>eKart</span>
            </Link>
          </h3>
        </div>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {/*
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> 
            */}
          </Nav>
          {auth.authenticate ? renderLoggedInLinks() : renderNonLoggedInLinks()}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
