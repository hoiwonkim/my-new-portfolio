// src\components\Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #333;
  padding: 1rem 2rem;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Li = styled.li`
  a {
    color: #fff;
    text-decoration: none;
    font-size: 1.2rem;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Header = () => {
  return (
    <Nav>
      <Ul>
        <Li><Link to="/">Home</Link></Li>
        <Li><Link to="/projects">Projects</Link></Li>
        <Li><Link to="/about">About</Link></Li>
        <Li><Link to="/contact">Contact</Link></Li>
      </Ul>
    </Nav>
  );
}

export default Header;
