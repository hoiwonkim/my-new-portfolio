// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #333;
  color: #fff;
  padding: 1rem;
  text-align: center;
`;

const NavLink = styled(Link)`
  margin: 0 1rem;
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => (
  <Nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/projects">Projects</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/contact">Contact</NavLink>
  </Nav>
);

export default Navbar;
