// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterWrapper>
      <p>&copy; 2024 Iram Bashir</p>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background-color: ${(props) => props.theme.colors.secondary};
  padding: ${(props) => props.theme.spacing.medium};
  color: white;
  text-align: center;
`;

export default Footer;
