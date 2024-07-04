// src/components/Header.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>Iram Bashir</h1>
      <nav>
        <ul>
          <li><Link to={`${process.env.PUBLIC_URL}/`}>Home</Link></li>
          <li><Link to={`${process.env.PUBLIC_URL}/about`}>About</Link></li>
          <li><Link to={`${process.env.PUBLIC_URL}/projects`}>Projects</Link></li>
          <li><Link to={`${process.env.PUBLIC_URL}/contact`}>Contact</Link></li>
        </ul>
      </nav>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  background-color: ${(props) => props.theme.colors.primary};
  padding: ${(props) => props.theme.spacing.medium};
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: white;
  }

  nav a {
    color: white;
    margin-left: ${(props) => props.theme.spacing.large};
    text-decoration: none;
  }
`;

export default Header;
