// src/components/Home.js
import React from 'react';
import styled from 'styled-components';

const Home = () => {
  return (
    <HomeWrapper>
      <h2>Welcome to My Portfolio</h2>
      <p>I'm a Software Engineer proficient in React JS and JavaScript.</p>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.section`
  padding: ${(props) => props.theme.spacing.large};
  text-align: center;
`;

export default Home;
