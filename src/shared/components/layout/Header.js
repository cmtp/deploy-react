import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// eslint-disable-next-line
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <header className="App-header">
      <Navbar dark color="dark" expand="md">
        <NavbarBrand href="/">{props.title}</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/todo">
                Todo
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/about">
                About
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to="/posts">
                New Post
              </Link>
            </NavItem>
          </Nav>
          <Nav navbar>
            <NavItem>
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
