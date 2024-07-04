// src/components/NotFound.js
import React from 'react';
import styled from 'styled-components';

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <a href="/">Go to Home</a>
    </NotFoundWrapper>
  );
};

const NotFoundWrapper = styled.section`
  padding: ${(props) => props.theme.spacing.large};
  text-align: center;
`;

export default NotFound;
