// src/components/Header.js
import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>Iram Bashir</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/projects">Projects</a>
        <a href="/contact">Contact</a>
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
